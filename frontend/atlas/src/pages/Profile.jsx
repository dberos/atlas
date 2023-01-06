import React from 'react'
import CTA from '../components/Global/CTA/CTA';

const Profile = () => {

    var title = 'myΑΤΛΑΣ';
    var subtitle = 'Ο προσωπικός μου λογαριασμός στον ΑΤΛΑΣ!'
    const links = [
      {
        id: 1,
        pageName: 'Αρχική',
        pageLink: '/'
      },
      {
        id: 2,
        pageName: 'Προφίλ',
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
    </div>
  )
}

export default Profile