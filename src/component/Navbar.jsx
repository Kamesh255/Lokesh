import React from 'react'
import './style.css'
import { IoMdMenu } from 'react-icons/io'

const Navbar = () => {
    return (
        <div class='header'>
            <div>
                <div>
                    <img src="https://logos.textgiraffe.com/logos/logo-name/Kamesh-designstyle-smoothie-m.png" style={{ height: '70px' }} alt="" />
                </div>
                <div class='pcNav'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px',color:'white' }}>
                        <p>Study Destinations</p>
                        <p>Services</p>
                        <p>Company</p>
                        <p>Upcoming Events</p>
                        <button>
                            Course Finder
                        </button> 
                    </div>

                </div>
                <div class='mobileNav'>
                    <p><IoMdMenu /> </p>
                </div>
            </div>
        </div>
    )
}

export default Navbar