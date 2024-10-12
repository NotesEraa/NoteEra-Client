import React, {useEffect} from 'react'
import ContactSections from '../components/ContactSections.jsx'
import Header from '../../Header/Header.jsx'


function ContactUs() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  

  return (
    <>
    <Header/>
    <div>
        <ContactSections/>
    </div>
    </>
  )
}

export default ContactUs