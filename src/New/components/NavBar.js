import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/navbar.scss';
import { HashLink as Link } from "react-router-hash-link";
import { AiOutlineRight } from 'react-icons/ai';
import logo from "../logo/logo-dark.svg"
const NavBar = () => {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 300);
        });
        return () => {
            setScroll({});
        }
    }, []);

    const [menuActive, setMenuActive] = useState(null);

    const handleMenuActive = () => {
        setMenuActive(!menuActive);
    };




    return (


        <header id="header_main" className={`header ${scroll ? 'is-fixed' : ''}`}>


            <div className="container">
                <div id="site-header-inner">
                    <div className="header__logo">
                        <NavLink to="/"><img src={logo} alt="Crybox" /></NavLink>
                    </div>
                    <nav id="main-nav" className={`main-nav ${menuActive ? 'active' : ''}`} >
                        <ul id="menu-primary-menu" className="menu">
                            <li style={{listStyle:"none"}}><Link className="hover-underline-animation" smooth to="#home">Home</Link></li>
                            <li style={{listStyle:"none"}}><Link className="hover-underline-animation" smooth to="#about">About</Link></li>
                            <li style={{listStyle:"none"}}><Link className="hover-underline-animation" smooth to="#facts">Facts</Link></li>
                            <li style={{listStyle:"none"}}><Link smooth to="#pricing">Pricing</Link></li>
                            <li style={{listStyle:"none"}}><Link smooth to="#testominal">Testominal</Link></li>
                            <li style={{listStyle:"none"}}><Link smooth to="#subcribe">Subscribe</Link></li>

                        </ul>
                    </nav>
                    <div className={`mobile-button ${menuActive ? 'active' : ''}`} onClick={handleMenuActive}><span></span></div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;