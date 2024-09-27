import Hero from "@/components/hero";
import { heroProfileEdit } from "@/data";
import { authenticateUser } from "@/server/find-user"
import Edit from "../../_components/edit";

export default async function EditPage() {

    const user = await authenticateUser();

    heroProfileEdit.title = user?.name ?? heroProfileEdit.title

    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-20 lg:p-24">
            <Hero {...heroProfileEdit} />
            <Edit />
        </main>
    )
}