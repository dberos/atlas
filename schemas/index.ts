import { checkEmailExists } from "@/server/find-user"
import { z } from "zod"
 
export const UserSchema = z.object({
  email: z.string(),
  password: z.string(),
  token: z.string()
})

export const UndergraduateFormSchema = UserSchema.extend({
  name: z.string(),
  surname: z.string(),
  university: z.string(),
  department: z.string(),
  userType: z.enum(["UNDERGRADUATE", "COMPANY"])
})

export const CompanyFormSchema = UserSchema.extend({
  name: z.string(),
  city: z.string(),
  district: z.string(),
  street: z.string(),
  streetNumber: z.string(),
  userType: z.enum(["UNDERGRADUATE", "COMPANY"])
})

export const RegisterFormTypeSchema = z.object({
  type: z.string()
})

export const RegisterFormUndergraduateSchema = z.object({
  name: z.string(),
  surname: z.string(),
  university: z.string(),
  department: z.string(),
  email: z.string().email({ message: 'Το email δεν είναι έγκυρο' }).
  refine(async (email) => {
      const exists = await checkEmailExists(email);
      return !exists;
  }, { message: "Το email χρησιμοποιείται ήδη" }),
  password: z.string().min(6, { message: 'Ο κωδικός πρέπει να είναι τουλάχιστον 6 χαρακτήρες' }),
  verifyPassword: z.string().min(6, { message: 'Ο κωδικός πρέπει να είναι τουλάχιστον 6 χαρακτήρες' }),
  userType: z.enum(["UNDERGRADUATE", "COMPANY"]),
  token: z.string()
}).refine((data) => data.password === data.verifyPassword, { message: 'Οι κωδικοί πρέπει να ταιριάζουν', path: ["verifyPassword"] })

export const RegisterFormInfoUndergraduateSchema = z.object({
  name: z.string().min(2, { message: 'Το όνομα πρέπεί να είναι τουλάχιστον 2 χαρακτήρες' }),
  surname: z.string().min(2, { message: 'Το επώνυμο πρέπει να είναι τουλάχιστον 2 χαρακτήρες' }),
  university: z.string(),
  department: z.string()
})

export const RegisterFormCompanySchema = z.object({
  name: z.string(),
  city: z.string(),
  district: z.string(),
  street: z.string(),
  streetNumber: z.string(),
  email: z.string().email({ message: 'Το email δεν είναι έγκυρο' }).
  refine(async (email) => {
      const exists = await checkEmailExists(email);
      return !exists;
  }, { message: "Το email χρησιμοποιείται ήδη" }),
  password: z.string().min(6, { message: 'Ο κωδικός πρέπει να είναι τουλάχιστον 6 χαρακτήρες' }),
  verifyPassword: z.string().min(6, { message: 'Ο κωδικός πρέπει να είναι τουλάχιστον 6 χαρακτήρες' }),
  userType: z.enum(["UNDERGRADUATE", "COMPANY"]),
  token: z.string()
}).refine((data) => data.password === data.verifyPassword, { message: "Οι κωδικοί πρέπει να ταιριάζουν", path: ["verifyPassword"] })

export const RegisterFormInfoCompanySchema = z.object({
  name: z.string().min(2, { message: 'Το όνομα πρέπεί να είναι τουλάχιστον 2 χαρακτήρες' }),
  city: z.string(),
  district: z.string().min(2, { message: 'Η περιοχή πρέπει να είναι τουλάχιστον 2 χαρακτήρες' }),
  street: z.string().min(2, { message: 'Η οδός πρέπει να είναι τουλάχιστον 2 χαρακτήρες' }),
  streetNumber:z.string().regex(/^\d*$/, { message: 'Ο αριθμός πρέπει να περιέχει μόνο αριθμητικούς χαρακτήρες' })
})

export const SearchFormSchema = z.object({
  field: z.string(),
  duration: z.string(),
  employment: z.string(),
  espa: z.boolean()
})

export const AddInternshipFormSchema = z.object({
  title: z.string().min(2, { message: 'Ο τίτλος πρέπει να είναι τουλάχιστον 2 χαρακτήρες' }),
  field: z.string(),
  employment: z.string(),
  duration: z.string(),
  espa: z.boolean(),
  salary: z.string(),
  description: z.string().min(10, { message: 'Η περιγραφή πρέπει να είναι τουλάχιστον 10 χαρακτήρες' })
})

export const UpdateInterestFormSchema = z.object({
  interestId: z.string(),
  internshipId: z.string(),
  cvName: z.optional(z.string()),
  cv: z.optional(z.string()).refine((base64String) => {
    if (!base64String) return true;

    // Calculate the size of the original binary data
    const base64Size = base64String.length * 3 / 4;
    return base64Size <= 1024 * 1024;
  }, {
    message: "Το αρχείο πρέπει να είναι μέχρι 1 MB.",
  }),
  description: z.optional(z.string())
});