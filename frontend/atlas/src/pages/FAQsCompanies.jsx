import React from 'react'
import CTA from '../components/Global/CTA/CTA'
import CompaniesFaqs from '../components/FAQs/Companies/CompaniesFaqs';

const FAQsCompanies = () => {

    var title = 'Εταιρείες';
    var subtitle = 'Μάθε ότι χρειάζεσαι για την '+
                    'Πρακτική Άσκηση!'
    const links = [
      {
        id: 1,
        pageName: 'Αρχική',
        pageLink: '/'
      },
      {
        id: 2,
        pageName: 'Συχνές Ερωτήσεις',
        pageLink: '/faqs'
      },
      {
        id: 3,
        pageName: 'Εταιρείες',
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
        <CompaniesFaqs/>
    </div>
  )
}

export default FAQsCompanies