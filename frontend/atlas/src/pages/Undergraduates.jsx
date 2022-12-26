import React from 'react'
import NavBar from '../components/Global/NavBar/NavBar'
import CTA from '../components/Global/CTA/CTA'
import UndergraduatesForm from '../components/Undergraduates/Form/UndergraduatesForm'
import Footer from '../components/Global/Footer/Footer'

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
        <NavBar/>
        <CTA 
        title={title} 
        subtitle={subtitle} 
        links={links}
        />
        <UndergraduatesForm/>
        <Footer/>
    </div>
  )
}

export default Undergraduates