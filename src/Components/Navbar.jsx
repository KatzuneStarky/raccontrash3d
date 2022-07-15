import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.scss'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div><Link to={"/"}>Inicio</Link></div>
            <div>Raccon Trash 3D</div>
            <div><GiHamburgerMenu /></div>
        </div>
    )
}

export default Navbar