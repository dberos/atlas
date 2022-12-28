import React from 'react'
import CTA from '../components/Global/CTA/CTA'
import CompaniesForm from '../components/Companies/Form/CompaniesForm'

const Companies = () => {

    var title = 'Εταιρείες';
    var subtitle = 'Η ανάπτυξη της επιχείρησής σου ' + 
                    'γίνεται πιο εύκολη από ποτε!'
    const links = [
      {
        id: 1,
        pageName: 'Αρχική',
        pageLink: '/'
      },
      {
        id: 2,
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
      <CompaniesForm/>
    </div>
  )
}

export default Companies