import React from 'react'
import CTA from '../components/Global/CTA/CTA'
import UndergraduatesSaved from '../components/Profile/Undergraduates/Saved/UndergraduatesSaved';

const SavedUndergraduates = () => {

    var title = 'myΑΤΛΑΣ';
    var subtitle = 'Οι Αποθηκευμένες μου Θέσεις στον ΑΤΛΑΣ!'
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
        pageName: 'Αποθηκευμένες Θέσεις',
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
        <UndergraduatesSaved/>
    </div>
  )
}

export default SavedUndergraduates