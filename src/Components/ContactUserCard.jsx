import React from 'react'


/// Child/Presenter Component
const ContactUserCard = ({name, title }) => {
  return (
    <div className='contact__usercard'>
      <img src="src/profile.png" alt="" />
      <div className='contact__info'> 
        <h2> {name} </h2>
        <h4 className='react-creator'>{title}</h4>
        <p className='lorem'>Lorem Ipsom</p>
      </div>
    </div>
  )
}

export default ContactUserCard