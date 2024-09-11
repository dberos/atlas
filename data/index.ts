import { CityType, DepartmentType, FieldType, HeroType, OptionType, ServiceType, UniversityType } from "@/types";

export const services: ServiceType[] = [
    {
        id: 1,
        title: "Αναζήτηση Πρακτικής Άσκησης",
        description: "Η εύρεση της επόμενής σου Πρακτικής Άσκησης είναι πιο εύκολη από ποτέ",
        imageSrc: "/home-services-left.svg",
        imageAlt: "a woman searching in a file"
    },
    {
        id: 2,
        title: "Υποβολή ενδιαφέροντος",
        description: "Αποθήκευσε τις θέσεις που σε ενδιαφέρουν και συμπλήρωσε την αίτηση στο προφίλ",
        imageSrc: "/home-services-middle.svg",
        imageAlt: "a woman searching in a board"
    },
    {
        id: 3,
        title: "Παρακολούθηση αίτησης",
        description: "Για κάθε αίτηση, ενημερώνεσαι εύκολα στο προφίλ για την εξέλιξή της",
        imageSrc: "/home-services-right.svg",
        imageAlt: "a woman searching in a website"
    }
]

export const cities: CityType[] = [
    {
        id: 1,
        value: 'Αθήνα'
    },
    {
        id: 2,
        value: 'Θεσσαλονίκη'
    },
    {
        id: 3,
        value: 'Πάτρα'
    }
];

export const universities: UniversityType[] = [
    {
        id: 1,
        value: 'ΕΚΠΑ'
    },
    {
        id: 2,
        value: 'ΑΠΘ'
    },
    {
        id: 3,
        value: 'Πατρών'
    }
];

export const departments: DepartmentType[] = [
    {
        id: 1,
        value: 'Πληροφορική'
    },
    {
        id: 2,
        value: 'Ιατρική'
    },
    {
        id: 3,
        value: 'Φιλολογία'
    }
];

export const fields: FieldType[] = [
    { 
        id: 1, 
        name: 'Πληροφορική' 
    },
    { 
        id: 2,
        name: 'Ιατρική' 
    },
    { 
        id: 3, 
        name: 'Φιλολογία' 
    },
];

export const suggestions: FieldType[] = [
    { 
        id: 1, 
        name: 'Όλοι οι Τομείς' 
    },
    { 
        id: 2, 
        name: 'Πρακτικές μέσω ΕΣΠΑ' 
    },
    { 
        id: 3, 
        name: 'Πρακτικές χωρίς ΕΣΠΑ' 
    }
];

export const fieldsComboBox: FieldType[] = [
    { 
        id: 1, 
        name: 'Όλοι οι Τομείς' 
    },
    { 
        id: 2, 
        name: 'Πρακτικές μέσω ΕΣΠΑ' 
    },
    { 
        id: 3, 
        name: 'Πρακτικές χωρίς ΕΣΠΑ' 
    },
    { 
        id: 4, 
        name: 'Πληροφορική' 
    },
    { 
        id: 5, 
        name: 'Ιατρική' 
    },
    { 
        id: 6, 
        name: 'Φιλολογία' 
    }
];

export const heroInternships: HeroType = {
        title: 'Πρακτικές Ασκήσεις',
        description: 'Αναζήτηση Θέσεων',
        breadcrumbs: [
            {
                id: 1,
                link: '/',
                label: 'Αρχική'
            }
        ],
        breadcrumbPage: 'Αναζήτηση',
        imageSrc: '/internships-hero.svg',
        imageAlt: 'woman and man working',
};

export const heroProfile: HeroType = {
    title: 'Προφίλ',
    description: 'Ο λογαριασμός μου',
    breadcrumbs: [
        {
            id: 1,
            link: '/',
            label: 'Αρχική'
        }
    ],
    breadcrumbPage: 'Προφίλ',
    imageSrc: '/profile-hero.svg',
    imageAlt: 'woman with her account',
};

export const optionsUndergraduate: OptionType[] = [
    {
        id: 1,
        title: 'Οι αιτήσεις μου',
        imageSrc: '/profile-undergraduates-left.svg',
        imageAlt: 'woman working on her laptop',
        link: '/profile/add-interest'
    },
    {
        id: 2,
        title: 'Οι θέσεις μου',
        imageSrc: '/profile-undergraduates-middle.svg',
        imageAlt: 'man checking approved positions',
        link: '/profile'
    },
    {
        id: 3,
        title: 'Τα στοιχεία μου',
        imageSrc: '/profile-undergraduates-companies-right.svg',
        imageAlt: 'man checking his profile',
        link: '/profile'
    }
];

export const optionsCompany: OptionType[] = [
    {
        id: 1,
        title: 'Προσθήκη θέσης',
        imageSrc: '/profile-companies-left.svg',
        imageAlt: 'man uploading a file',
        link: '/profile/add-internship'
    },
    {
        id: 2,
        title: 'Οι θέσεις μου',
        imageSrc: '/profile-companies-middle.svg',
        imageAlt: 'woman sitting on her files',
        link: '/profile'
    },
    {
        id: 3,
        title: 'Τα στοιχεία μου',
        imageSrc: '/profile-undergraduates-companies-right.svg',
        imageAlt: 'man checking his profile',
        link: '/profile'
    }
];

export const heroProfileAddInternship: HeroType = {
    title: 'Προφίλ',
    description: 'Προσθήκη Πρακτικής',
    breadcrumbs: [
        {
            id: 1,
            link: '/',
            label: 'Αρχική'
        },
        {
            id: 2,
            link: '/profile',
            label: 'Προφίλ'
        }
    ],
    breadcrumbPage: 'Νέα Θέση',
    imageSrc: '/profile-hero.svg',
    imageAlt: 'woman with her account',
};

export const fieldsAddInternship: FieldType[] = [
    { 
        id: 1, 
        name: 'Πληροφορική' 
    },
    { 
        id: 2, 
        name: 'Ιατρική' 
    },
    { 
        id: 3, 
        name: 'Φιλολογία' 
    }
];

export const heroProfileAddInterest: HeroType = {
    title: 'Προφίλ',
    description: 'Προσθήκη Ενδιαφέροντος',
    breadcrumbs: [
        {
            id: 1,
            link: '/',
            label: 'Αρχική'
        },
        {
            id: 2,
            link: '/profile',
            label: 'Προφίλ'
        }
    ],
    breadcrumbPage: 'Αποθηκευμένες Θέσεις',
    imageSrc: '/profile-hero.svg',
    imageAlt: 'woman with her account',
};
