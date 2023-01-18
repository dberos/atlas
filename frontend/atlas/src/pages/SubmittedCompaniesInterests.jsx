import React from 'react'
import CTA from '../components/Global/CTA/CTA'
import CompaniesSubmittedInterests from '../components/Profile/Companies/Submitted/CompaniesSubmittedInterests';

const SubmittedCompaniesInterests = () => {

    var title = 'myΑΤΛΑΣ';
    var subtitle = 'Οι ενδιαφερόμενοι Φοιτητές για την αγγελία μου στον ΑΤΛΑΣ!'
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
        pageName: 'Καταχωρημένες Αγγελίες',
        pageLink: '/profile/companies/submitted'
      },
      {
        id: 4,
        pageName: 'Ενδιαφερόμενοι',
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
        <CompaniesSubmittedInterests/>
    </div>
  )
}

export default SubmittedCompaniesInterests