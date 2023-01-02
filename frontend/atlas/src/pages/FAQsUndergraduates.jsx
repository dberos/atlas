import React from 'react'
import CTA from '../components/Global/CTA/CTA'
import UndergraduatesFaqs from '../components/FAQs/Undergraduates/UndergraduatesFaqs'

const FAQsUndergraduates = () => {

    var title = 'Φοιτητές';
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
        pageName: 'Φοιτητές',
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
        <UndergraduatesFaqs/>
    </div>
  )
}

export default FAQsUndergraduates