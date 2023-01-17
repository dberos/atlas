import React from 'react'
import CTA from '../components/Global/CTA/CTA';
import UndergraduatesSubmitted from '../components/Profile/Undergraduates/Submitted/UndergraduatesSubmitted';

const SubmittedUndergraduates = () => {

    var title = 'myΑΤΛΑΣ';
    var subtitle = 'Οι Καταχωρημένες μου Θέσεις στον ΑΤΛΑΣ!'
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
        pageName: 'Καταχωρημένες Θέσεις',
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
        <UndergraduatesSubmitted/>
    </div>
  )
}

export default SubmittedUndergraduates