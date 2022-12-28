import React from 'react'
import CTA from '../components/Global/CTA/CTA'
import UndergraduatesForm from '../components/Undergraduates/Form/UndergraduatesForm'

const Undergraduates = () => {

    var title = 'Φοιτητές';
    var subtitle = 'Ξεκίνα την επαγγελματική '+
                    'σου σταδιοδρομία με ένα '+
                    'απλό βήμα!';
    const links = [
      {
        id: 1,
        pageName: 'Αρχική',
        pageLink: '/'
      },
      {
        id: 2,
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
      <UndergraduatesForm/>
    </div>
  )
}

export default Undergraduates