import React from 'react'
import './navbar.style.css'

export default function Navbar({ hideNavigator }) {
    return (
        <div id="nav-sidebar" className="nav-content animated bounceInRight">
            <div onClick={hideNavigator}>X</div>
            <div>Home</div>
            <div>Service</div>
            <div>Promotions</div>
            <div>Contact</div>
            <div>About Us</div>
        </div>
    )
}
