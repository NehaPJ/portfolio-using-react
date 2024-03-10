import React from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.jpg';
import { Link } from 'react-scroll';

const navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo'/>
            <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Portfolio</Link>
          </div>
            <button className="desktopMenuBtn"/>
                <img src={contactImg} alt="contact" className="desktopMenuImg"/>Contact Me
        </nav>
    )
            }

            


export default navbar;