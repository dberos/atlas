import React from 'react'
import '../faqs.css'
import Faq from '../FAQ/Faq'
import { faqsCompanies } from './faqsCompanies'

const FaqsCompanies = () => {
  return (
    <div className="faqs-container">
        <div className="faqs-wrapper">
            {
              faqsCompanies.map((value) => {
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

export default FaqsCompanies