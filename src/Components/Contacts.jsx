import React from 'react'
import ContactUserCard from './ContactUserCard'

/// Container/Parent Component
const Contacts = () => {
  
  
  // /// Fetch API 
  const arr = [ {name: 'Caston', title: "Coach"}, 
                {name: "Josh", title: "Coach"}, 
                {name: "Khy", title: "Fellow"} ] ;
  const contactList = arr.map((contact, index) =>  
          <ContactUserCard 
            key={index}
            name={contact.name} 
            title={contact.title}/>);

  const props = { name: "David"}

  return (
    <div className='contacts_container'>
      <h3> Contacts</h3>
      <div className="contacts">
        {contactList }
      </div>
    </div>
  )
}

export default Contacts