import React from 'react'
import Navigation from './components/navigation/Navigation'
import ContactHeader from './components/contactHeader/contactHeader'
import "./App.css"
import ContactForm from './components/contactform/ContactForm'

function App() {
  return (
    <>
    <Navigation />
    <main className='main_container'>
      <ContactHeader />
      <ContactForm />
    </main>
    </>
  )
}

export default App
