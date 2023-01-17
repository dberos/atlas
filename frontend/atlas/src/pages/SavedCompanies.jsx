import React from 'react'
import CTA from '../components/Global/CTA/CTA';
import CompaniesSaved from '../components/Profile/Companies/Saved/CompaniesSaved';

const SavedCompanies = () => {

    var title = 'myΑΤΛΑΣ';
    var subtitle = 'Οι Αποθηκευμένες μου αγγελίες στον ΑΤΛΑΣ!'
    const links = [
      {
        id: 1,
        pageName: 'Αρχική',
        pageLink: '/'
      },
      {
        id: 2,
        pageName: 'Προφίλ',
        pageLink: '/profile'
      },
      {
        id: 3,
        pageName: 'Αποθηκευμένες Αγγελίες',
        pageLink: null
      }
    ]

  return (
    <div>
        <CTA
        title={title} 
        subtitle={subtitle} 
        links={links}
        />
        <CompaniesSaved/>
    </div>
  )
}

export default SavedCompanies