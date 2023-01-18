import React from 'react'
import CTA from '../components/Global/CTA/CTA'
import CompaniesSubmitted from '../components/Profile/Companies/Submitted/CompaniesSubmitted';

const SubmittedCompanies = () => {

    var title = 'myΑΤΛΑΣ';
    var subtitle = 'Οι Καταχωρημένες μου αγγελίες στον ΑΤΛΑΣ!'
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
        <CompaniesSubmitted/>
    </div>
  )
}

export default SubmittedCompanies