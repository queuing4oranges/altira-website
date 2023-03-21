import React from "react";
import { Link } from 'react-scroll';
import AltiraLogo from "../icons/AltiraLogo";
import Hamburger from "../icons/Hamburger";

export default function Navbar() {

  const toggleHamburger = () => {
    let menu = document.querySelector(".mobile-navbar__list");
    menu.classList.toggle("show"); 
  }

  return (
    <div className="navbar-container sticky">
      
      <div className="navbar">
        <div className="navbar__logo">
          <Link activeClass="none" smooth spy to="home-cont" ><AltiraLogo width={92} height={36} /></Link>
        </div>

        <div className="navbar__links">
          <Link onClick={toggleHamburger} activeClass="active" smooth spy to="sluzby-cont" >služby</Link>
          <Link onClick={toggleHamburger} activeClass="active" smooth spy to="zkus-cont" >naše zkušenosti</Link>
          <Link onClick={toggleHamburger} activeClass="active" smooth spy to="onas" >o nás</Link>
          <Link onClick={toggleHamburger} activeClass="active" smooth spy to="kontakt-cont" >kontakt</Link>
          <Link onClick={toggleHamburger} activeClass="active" smooth spy to="refer-cont" >reference</Link>       
        </div>
      </div>

      <div className="mobile-navbar">
        
        <div className="mobile-navbar__logo">
          <Link activeClass="none" smooth spy to="home-cont" ><AltiraLogo width={92} height={36} /></Link>
        </div>
     
        <div className="mobile-navbar__links">

            <div className="mobile-navbar__button">
              <button onClick={toggleHamburger}><Hamburger width={30} height={30} color="#5f6166"/></button>
            </div>

            <div className="mobile-navbar__list">
              <ul>
                <li><Link onClick={toggleHamburger} activeClass="active" smooth spy to="sluzby-cont" >služby</Link></li>
                <li><Link onClick={toggleHamburger} activeClass="active" smooth spy to="zkus-cont" >naše zkušenosti</Link></li>
                <li><Link onClick={toggleHamburger} activeClass="active" smooth spy to="onas" >o nás</Link></li>
                <li><Link onClick={toggleHamburger} activeClass="active" smooth spy to="kontakt-cont" >kontakt</Link></li>
                <li><Link onClick={toggleHamburger} activeClass="active" smooth spy to="refer-cont" >reference</Link> </li>
              </ul>
            </div> 

        </div>

      </div>
    
    </div>
  );
}
