import Service from "./service";

const Services = () => {

    const services = [
        {
            id: 1,
            title: "Αναζήτηση Πρακτικής Άσκησης",
            description: "Η εύρεση της επόμενής σου Πρακτικής Άσκησης είναι πιο εύκολη από ποτέ",
            imgSrc: "/home-services-left.svg",
            imgAlt: "a woman searching in a file"
        },
        {
            id: 2,
            title: "Υποβολή ενδιαφέροντος",
            description: "Εάν βρήκες την κατάλληλη θέση, μπορείς να συμπληρώσεις την αίτηση ενδιαφέροντος",
            imgSrc: "/home-services-middle.svg",
            imgAlt: "a woman searching in a board"
        },
        {
            id: 3,
            title: "Παρακολούθηση αίτησης",
            description: "Ενημερώνεσαι εύκολα στο προφίλ σου για την εξέλιξη της αίτησής σου",
            imgSrc: "/home-services-right.svg",
            imgAlt: "a woman searching in a website"
        }
    ]
    return ( 
        <div className="h-[130vh] md:h-screen lg:h-96 xl:h-80 w-full mt-20 lg:mt-10 rounded-lg lg:bg-slate-100 lg:dark:bg-slate-900">
            <div className="w-full h-10 flex items-center justify-center lg:justify-end">
                <p className="border-dashed border-2 p-2 lg:border-0 lg:p-0 border-indigo-500 text-base lg:text-sm font-medium lg:mr-5">
                    Τι προσφέρει ο ΆΤΛΑΣ;
                </p>
            </div>
            <div className="mt-4 lg:mt-0 size-full grid grid-rows-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3">
                {
                    services.map((service) => (
                        <Service 
                        key={service.id}
                        title={service.title}
                        description={service.description}
                        imgSrc={service.imgSrc}
                        imgAlt={service.imgAlt}
                        />
                    ))
                }
            </div>
        </div>
     );
}
 
export default Services;