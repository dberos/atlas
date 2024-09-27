"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { UpdateInterestFormSchema } from "@/schemas";
import { updateInterest } from "@/server/insert-interest";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { Loader2, Upload } from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"  

const SavedInterestForm = ({
    interestId,
    internshipId,
    isOpen
}: {
    interestId: string,
    internshipId: string,
    isOpen: boolean
}) => {

    const [fileName, setFileName] = useState('');

    const { toast } = useToast();

    const router = useRouter();

    // Send it to backend as string and convert it there to blob
    const convertFileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const base64String = btoa(
                    new Uint8Array(reader.result as ArrayBuffer)
                      .reduce((data, byte) => data + String.fromCharCode(byte), '')
                );
                resolve(base64String);
            };
            reader.onerror = () => reject(reader.error);
            reader.readAsArrayBuffer(file);
        });
    };

    const form = useForm<z.infer<typeof UpdateInterestFormSchema>>({
        resolver: zodResolver(UpdateInterestFormSchema),
        defaultValues: {
          cvName: '',
          cv: '',
          description: '',
          interestId: interestId,
          internshipId: internshipId
        },
    })
    
    async function onSubmit(values: z.infer<typeof UpdateInterestFormSchema>) {
        const response = await updateInterest(values);
        if (response.error) {
            toast({
                title: "Προέκυψε σφάλμα."
            })
        }
        else {
            toast({
                title: "Υποβλήθηκε με επιτυχία το ενδιαφέρον για την Πρακτική Άσκηση"
            })
        }
        form.reset();
        setFileName('');
        router.push('/profile');
    }

    // In case it opens again after not submitting
    // And also add if, because with alert dialog it wasnt sending cv and description to backend
    useEffect(() => {
        if (isOpen) {
            form.reset();
            setFileName('');
        }
    }, [isOpen, form])

    return ( 
        <div className="pt-10 pb-10 w-full md:w-5/6 md:m-auto flex flex-col items-center">
            <div className="h-2 w-5/6 lg:w-full xl:w-4/6 bg-gradient-to-r from-slate-300 via-orange-200 to-slate-300 dark:from-slate-800 dark:via-orange-500 dark:to-slate-800" />
            <h3 className="mt-2 text-base text-center">
                Ενδιαφέρον
            </h3>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-5/6 lg:w-full xl:w-4/6">
                <div className="flex flex-col gap-y-8">
                <FormField
                control={form.control}
                name="cv"
                render={({ field: { value, onChange, ...fieldProps } }) => (
                    <FormItem>
                    <FormLabel>Βιογραφικό</FormLabel>
                    <FormControl>
                    <>
                    <Input
                    id={`hiddenInput${interestId}${internshipId}`}
                    className="hidden"
                    type="file" 
                    accept="application/pdf"
                    {...fieldProps}
                    onChange={async (event) => {
                        const file = event.target.files?.[0];
                        if (file) {
                            setFileName(file.name);
                            form.setValue('cvName', file.name);
                            const cvBase64 = await convertFileToBase64(file);
                            form.setValue('cv', cvBase64);
                        }
                    }}
                    />
                    <div className="h-10 px-4 py-2 border border-input rounded-md flex items-center">
                        <Button 
                        variant='ghost' 
                        size='sm' 
                        className="-ml-4" 
                        type="button"
                        onClick={() => document.getElementById(`hiddenInput${interestId}${internshipId}`)?.click()}
                        >
                            Επιλογή <Upload className="size-4 ml-2" />
                        </Button>
                        <p className="text-sm ml-4 w-60 lg:w-80 text-start overflow-hidden whitespace-nowrap text-ellipsis">
                            {fileName}
                        </p>
                    </div>
                    </>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Περιγραφή</FormLabel>
                    <FormControl>
                        <Textarea
                        placeholder="Λίγα λόγια για εσένα..."
                        className="resize-none"
                        {...field}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                </div>
                <div className="flex justify-center">
                    <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button type="button">
                            Ενδιαφέρομαι
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                        <AlertDialogTitle>
                            Είστε σίγουροι;
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            Πρόκειται να υποβάλετε επίσημα ενδιαφέρον για την Πρακτική Άσκηση
                        </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                        <AlertDialogCancel
                        disabled={form.formState.isSubmitting}
                        >
                            Ακύρωση
                        </AlertDialogCancel>
                        <AlertDialogAction
                        type="button"
                        onClick={form.handleSubmit(onSubmit)}
                        disabled={form.formState.isSubmitting}
                        >
                            {form.formState.isSubmitting && <Loader2 className="size-4 mr-2 animate-spin" />}
                            Συνέχεια
                        </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                    </AlertDialog>
                </div>
            </form>
            </Form>
        </div>
        
    );
}
 
export default SavedInterestForm;