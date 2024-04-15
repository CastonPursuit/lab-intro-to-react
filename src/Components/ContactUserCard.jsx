import React from 'react'
import './contactusercard.css'

const ContactUserCard = () => {
  return (
    <div className='usercard-container'>
        <img className='usercard-container__image' src='../src/profile.png'></img>
        <div className='usercard-container__info'>
            <p>John Walke</p>
            <p>React Developer</p>
            <p>Lorem ipsum. </p>
        </div>
    </div>
  )
}

export default ContactUserCard