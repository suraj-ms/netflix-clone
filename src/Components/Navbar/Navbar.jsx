import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
  return (
    <div className={`navbar ${show && 'nav_black'}`}>
        <img className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt=" Netflix Logo" />
        <img className='nav_avatar'src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=" Netflix Avatar" />
    </div>
  )
}

export default Navbar