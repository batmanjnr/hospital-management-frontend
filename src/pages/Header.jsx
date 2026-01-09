import React from 'react'
import Nav from '../components/Nav'
import '../styles/head.css'

const Header = () => {
  return (
   <>
    <div className='head'>
        <Nav/>
         <div className='headword'>
            <h3>We Will Look After You.</h3>
            <p>This is Our Promise To You</p>
            <button>Schedule An Appointment</button>
        </div>
        <div className=' headFlex'>
            <div>
                <p>Appointment</p>
            </div>
            <div>
                <p>Locations</p>
            </div>
            <div>
                <p>Services</p>
            </div>
            <div>
              <p> Emergency </p>
            </div>
        </div>
       
    </div>
    
   </>
  )
}

export default Header