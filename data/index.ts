import { CityType, DepartmentType, FieldType, HeroType, UniversityType } from "@/types";

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
}

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
}
