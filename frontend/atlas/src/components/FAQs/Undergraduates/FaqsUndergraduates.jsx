import React from 'react'
import '../faqs.css'
import Faq from '../FAQ/Faq'
import { faqsUndergrads } from './faqsUndergraduates'

const FaqsUndergraduates = () => {

  

  return (
    <div className="faqs-container">
        <div className="faqs-wrapper">
            {
              faqsUndergrads.map((value) => {
                return(
                  <Faq
                  key={value.id}
                  title={value.title}
                  description={value.description}
                  />
                )
              })
            }
        </div>
    </div>
  )
}

export default FaqsUndergraduates