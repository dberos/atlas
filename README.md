
# atlas

## Production

Ο [ιστοχώρος](https://internship-management-website.vercel.app/) αποτελεί απλώς μια πρόταση επανασχεδιασμού του [ΑΤΛΑΣ](https://atlas.grnet.gr/) και δεν έχει κανένα κερδοσκοπικό ενδιαφέρον. Υλοποιήθηκε αρχικά στα πλαίσια του μαθήματος Επικοινωνία Ανθρώπου - Μηχανής 2022 - 2023 με React.js και spring boot και δύο χρόνια αργότερα με Next.js 14 με χρήση server actions και το prisma orm, για εξάσκηση στις νεότερες τεχνολογίες. Είναι υλοποιημένες λειτουργίες όπως: Σύνδεση / Εγγραφή / Αυθεντικοποίηση χρηστών, Προσθήκη / Αναζήτηση Πρακτικής Άσκησης με σελιδοποίηση, Προσθήκη / Αποδοχή / Απόρριψη Ενδιαφέροντος Πρακτικής Άσκησης, Επεξεργασία στοιχείων, όμως επιτρέπεται μόνο η Αναζήτηση.

## Development

Για όλες τις λειτουργίες και τρέξιμο τοπικά:
1. `npm install`
2. `.env` στο κεντρικό directory
```
DATABASE_URL="..."
JWT_SECRET="..."
```
Για την βάση ([Neon](https://neon.tech/), [Supabase](https://supabase.com/)) μπορεί να χρειαστεί και 
```
DIRECT_URL="..."
``` 
και στο `/prisma/schema.prisma` 
```
directUrl = env(DIRECT_URL)
```
3. `npx prisma generate`
4. `npx prisma db push`
5. Για όλες τις λειτουργίες αλλαγή στο `/hooks/use-mode-store.tsx` 
```
isAllowed: true
```
6. `npm run dev`