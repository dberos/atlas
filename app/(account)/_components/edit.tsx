import EditForm from "./edit-form";

const Edit = () => {
    return ( 
        <div className="lg:mt-20 pb-10 flex flex-col gap-y-10 border rounded-md w-full 2xl:w-5/6 h-auto">
            <div className="flex items-center justify-center w-full h-20">
                <h3 className="text-center text-xl font-medium">
                    Τα στοιχεία μου
                </h3>
            </div>
            <div className="w-5/6 lg:w-4/6 m-auto">
                <EditForm />
            </div>
        </div>
    );
}
 
export default Edit;