import { CityType, DepartmentType, FaqType, FieldType, HeroType, OptionType, ServiceType, UniversityType } from "@/types";

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
        link: '/profile/view-interests'
    },
    {
        id: 3,
        title: 'Τα στοιχεία μου',
        imageSrc: '/profile-undergraduates-companies-right.svg',
        imageAlt: 'man checking his profile',
        link: '/profile/edit'
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
        link: '/profile/view-internships'
    },
    {
        id: 3,
        title: 'Τα στοιχεία μου',
        imageSrc: '/profile-undergraduates-companies-right.svg',
        imageAlt: 'man checking his profile',
        link: '/profile/edit'
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

export const heroFaq: HeroType = {
    title: 'Συχνές Ερωτήσεις',
    description: 'Πληροφορίες ιστοχώρου',
    breadcrumbs: [
        {
            id: 1,
            link: '/',
            label: 'Αρχική'
        },
    ],
    breadcrumbPage: 'Συχνές Ερωτήσεις',
    imageSrc: '/faq-hero.svg',
    imageAlt: 'man and woman with a question mark',
};

export const optionsFaq: OptionType[] = [
    {
        id: 1,
        title: 'Φοιτητές',
        imageSrc: '/faq-left.svg',
        imageAlt: 'student reading',
        link: '/faq/undergraduates'
    },
    {
        id: 2,
        title: 'Εταιρείες',
        imageSrc: '/faq-middle.svg',
        imageAlt: 'company viewing products',
        link: '/faq/companies'
    },
    {
        id: 3,
        title: 'Πανεπιστήμια',
        imageSrc: '/faq-right.svg',
        imageAlt: 'professor teaching',
        link: '/faq'
    }
];

export const heroFaqUndergraduates: HeroType = {
    title: 'Συχνές Ερωτήσεις',
    description: 'Πληροφορίες Φοιτητών',
    breadcrumbs: [
        {
            id: 1,
            link: '/',
            label: 'Αρχική'
        },
        {
            id: 2,
            link: '/faq',
            label: 'Συχνές Ερωτήσεις'
        },
    ],
    breadcrumbPage: 'Φοιτητές',
    imageSrc: '/faq-hero.svg',
    imageAlt: 'man and woman with a question mark',
};

export const heroFaqCompanies: HeroType = {
    title: 'Συχνές Ερωτήσεις',
    description: 'Πληροφορίες Εταιρειών',
    breadcrumbs: [
        {
            id: 1,
            link: '/',
            label: 'Αρχική'
        },
        {
            id: 2,
            link: '/faq',
            label: 'Συχνές Ερωτήσεις'
        },
    ],
    breadcrumbPage: 'Εταιρείες',
    imageSrc: '/faq-hero.svg',
    imageAlt: 'man and woman with a question mark',
};

export const faqUndergraguates: FaqType[] = [
    {
        id: 1,
        title: 'Πως μπορώ να αναζητήσω θέσεις Πρακτικής Άσκησης;',
        description: 'Στον ΑΤΛΑΣ μπορείς να αναζητήσεις θέσεις Πρακτικής Άσκησης '+
        'είτε μέσω ΕΣΠΑ είτε χωρίς. Μπορείς να δεις και όλες τις Πρακτικές από κάθε '+
        'κατηγορία αν είσαι αναποφάσιστος. Επιλέγεις τον τομέα που σε ενδιαφέρει από την '+
        'αναζήτηση στην αρχική σελίδα και στη συνέχεια μπορείς να επιλέξεις συγκεκριμένα '+
        'φίλτρα για εξατομικευμένη αναζήτηση.'
    },
    {
        id: 2,
        title: 'Πως θα βρω πληροφορίες για τις θέσεις;',
        description: 'Εφόσον έχεις πραγματοποιήσει την αναζήτηση σου, θα εμφανιστεί μία πλήρης λίστα '+
        'με τις φιλτραρισμένες θέσεις και τις απαραίτητες πληροφορίες για κάθε μία.'
    },
    {
        id: 3,
        title: 'Πως θα υποβάλω το ενδιαφέρον μου για μία θέση;',
        description: 'Εφόσον βρεις την θέση που σε ενδιαφέρει, επιλέγεις το κουμπί Ενδιαφέρομαι '+
        'και η θέση αποθηκεύεται στο προφίλ σου. Από εκεί στην καρτέλα οι Αιτήσεις μου, συμπληρώνεις '+
        'την απαραίτητη φόρμα και έπειτα περιμένεις την απάντηση από την εταιρεία στην καρτέλα οι '+
        'Θέσεις μου.'
    },
    {
        id: 4,
        title: 'Πως θα μάθω αν έχω επιλεγεί για μία θέση;',
        description: 'Για κάθε καταχωρημένη σου αίτηση, παρακολουθείς την εξέλιξή της '+
        'από την καρτέλα οι Θέσεις μου, στο προφίλ σου.'
    },
    {
        id: 5,
        title: 'Πως θα δημιουργήσω τον λογαριασμό μου;',
        description: 'Επιλέγοντας το κουμπί Εγγραφή στο πάνω δεξί μέρος του ιστοχώρου '+
        'ή το μενού και τις επιλογές Λογαριασμός, Εγγραφή, άν είσαι από κινητό και στη συνέχεια '+
        'συμπληρώνοντας μία φόρμα, ο λογαριασμός σου θα είναι έτοιμος.'
    },
    {
        id: 6,
        title: 'Πως θα συνδεθώ στον λογαριασμό μου;',
        description: 'Επιλέγοντας το κουμπί Σύνδεση στο πάνω δεξί μέρος του ιστοχώρου '+
        'ή το μενού και τις επιλογές Λογαριασμός, Σύνδεση, άν είσαι από κινητό και στη συνέχεια '+
        'συμπληρώνεις τα στοιχεία σου.'
    },
    {
        id: 7,
        title: 'Πως θα βρω το ιστορικό μου;',
        description: 'Επιλέγοντας το εικονίδιο του προφίλ σου ή το μενού και τις επιλογές Λογαριασμός, Προφίλ '+
        'επιλέγεις είτε τις Αιτήσεις μου που περιέχουν τις Αποθηκευμένες θέσεις ,είτε τις Θέσεις μου '+
        'που περιέχουν τις καταχωρημένες αιτήσεις.'
    },
];

export const faqCompanies: FaqType[] = [
    {
        id: 1,
        title: 'Πως μπορώ να δημοσιεύσω νέα Θέση Πρακτικής Άσκησης;',
        description: 'Αφού μεταβείς στο προφίλ σου, επιλέγεις την καρτέλα Προσθήκη θέσης '+
        'και στη συνέχεια συμπληρώνεις την απαραίτητη φόρμα.'
    },
    {
        id: 2,
        title: 'Πως μπορώ να επιλέξω έναν Φοιτητή για μία θέση;',
        description: 'Από το προφίλ σου επιλέγεις την καρτέλα Οι Θέσεις μου και στη συνέχεια ' +
        'για κάθε θέση που έχεις δημοσιεύσει βλέπεις τους ενδιαφερόμενους φοιτητές με την αίτησή '+
        'τους και επιλέγεις αν θα αποδεχτείς ή θα απορρίψεις κάθε αίτηση.'
    },
    {
        id: 3,
        title: 'Πως θα δημιουργήσω τον λογαριασμό μου;',
        description: 'Επιλέγοντας το κουμπί Εγγραφή στο πάνω δεξί μέρος του ιστοχώρου '+
        'ή το μενού και τις επιλογές Λογαριασμός, Εγγραφή, άν είσαι από κινητό και στη συνέχεια '+
        'συμπληρώνοντας μία φόρμα, ο λογαριασμός σου θα είναι έτοιμος.'
    },
    {
        id: 4,
        title: 'Πως θα συνδεθώ στον λογαριασμό μου;',
        description: 'Επιλέγοντας το κουμπί Σύνδεση στο πάνω δεξί μέρος του ιστοχώρου '+
        'ή το μενού και τις επιλογές Λογαριασμός, Σύνδεση, άν είσαι από κινητό και στη συνέχεια '+
        'συμπληρώνεις τα στοιχεία σου.'
    },
];

export const heroProfileViewInterests: HeroType = {
    title: 'Προφίλ',
    description: 'Παρακολούθηση Αιτήσεων',
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
    breadcrumbPage: 'Καταχωρημένες Θέσεις',
    imageSrc: '/profile-hero.svg',
    imageAlt: 'woman with her account',
};

export const heroProfileViewInternships: HeroType = {
    title: 'Προφίλ',
    description: 'Παρακολούθηση Θέσεων',
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
    breadcrumbPage: 'Καταχωρημένες Θέσεις',
    imageSrc: '/profile-hero.svg',
    imageAlt: 'woman with her account',
};

export const heroProfileViewInternship: HeroType = {
    title: 'Προφίλ',
    description: 'Επιλογή υποψηφίου',
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
        },
        {
            id: 3,
            link: '/profile/view-internships',
            label: 'Καταχωρημένες Θέσεις'
        }
    ],
    breadcrumbPage: 'Πρακτική Άσκηση',
    imageSrc: '/profile-hero.svg',
    imageAlt: 'woman with her account',
};

export const heroProfileEdit: HeroType = {
    title: 'Προφίλ',
    description: 'Επεξεργασία Στοιχείων',
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
        },
    ],
    breadcrumbPage: 'Στοιχεία',
    imageSrc: '/profile-hero.svg',
    imageAlt: 'woman with her account',
};
