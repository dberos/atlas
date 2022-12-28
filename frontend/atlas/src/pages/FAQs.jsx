import React from 'react'
import CTA from '../components/Global/CTA/CTA'
import FaqsPersonas from '../components/FAQs/Personas/FaqsPersonas';

const FAQs = () => {

    var title = 'Συχνές Ερωτήσεις';
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
        <FaqsPersonas/>
    </div>
  )
}

export default FAQs