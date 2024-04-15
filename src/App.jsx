import React from 'react'
import './app.css'
import NavBar from './Components/NavBar'
import UserProfile from './Components/UserProfile'
import Posts from './Components/Posts'
import Contacts from './Components/Contacts'

const App = () => {
  return (
    <div className='page-container'> 
        <NavBar></NavBar>
        <UserProfile></UserProfile>
        <Posts></Posts>
        <Contacts></Contacts>
    </div>
  )
}

export default App