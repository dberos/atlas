import React from 'react'
import CTA from '../components/Global/CTA/CTA';
import UndergraduatesResults from '../components/Undergraduates/Results/UndergraduatesResults';

const ResultsUndergraduates = () => {

    var title = 'Φοιτητές';
    var subtitle = 'Βρες την Πρακτική Άσκηση που σου ταιριάζει!'
    const links = [
      {
        id: 1,
        pageName: 'Αρχική',
        pageLink: '/'
      },
      {
        id: 2,
        pageName: 'Φοιτητές',
        pageLink: '/undergraduates'
      },
      {
        id: 3,
        pageName: 'Αποτελέσματα',
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
        <UndergraduatesResults/>
    </div>
  )
}

export default ResultsUndergraduates