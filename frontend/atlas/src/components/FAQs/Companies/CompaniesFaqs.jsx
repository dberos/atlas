import React from 'react'
import '../faqs.css'
import Faq from '../FAQ/Faq'
import { data } from './data'

const CompaniesFaqs = () => {
  return (
    <div className="faqs-container">
        <div className="faqs-wrapper">
            {
              data.map((value) => {
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

export default CompaniesFaqs