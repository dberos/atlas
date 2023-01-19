import React from 'react'
import CTA from '../components/Global/CTA/CTA'
import ProfileEdit from '../components/Profile/Edit/ProfileEdit';

const EditProfile = () => {

    var title = 'myΑΤΛΑΣ';
    var subtitle = 'Επεξεργασία των στοιχείων μου στον ΑΤΛΑΣ!';
    const links = [
      {
        id: 1,
        pageName: 'Αρχική',
        pageLink: '/'
      },
      {
        id: 2,
        pageName: 'Προφίλ',
        pageLink: '/profile'
      },
      {
        id: 3,
        pageName: 'Επεξεργασία',
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
        <ProfileEdit/>
    </div>
  )
}

export default EditProfile