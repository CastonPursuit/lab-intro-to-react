import React from 'react'
import ContactUserCard from './ContactUserCard'

/// Container/Parent Component
const UserProfile = () => {
  return (
    <div className='userprofile_container'>
      <ContactUserCard
        name={'Jordan'}
      />
    </div>
  )
}

export default UserProfile