import React from "react";
import { Link } from 'react-scroll';
import AltiraLogo from "../icons/AltiraLogo";
import Facebook from "../icons/Facebook";
import Hamburger from "../icons/Hamburger";
import Instagram from "../icons/Instagram";
import Linkedin from "../icons/Linkedin";

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

          <div className="navbar__media">
            <a href="https://www.facebook.com/Altira_logistics-121211334246543/"
            target="_blank"><Facebook color="#11446e" height={20} width={20} /></a>
            <a href="https://www.instagram.com/altira_logistics/" target="_blank" rel="noreferrer"><Instagram color="#11446e" height={25} width={25} stroke="#11446e" strokeWidth={2}/></a>
            <a href="https://www.linkedin.com/company/altira-s-r-o/" target="_blank" rel="noreferrer"><Linkedin color="#11446e" height={20} width={20} /></a>
          </div>    
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
                <li className="social-media">
                  <a href="https://www.facebook.com/Altira_logistics-121211334246543/" target="_blank"><Facebook color="#5f6166" height={30} width={30} /></a>
                  <a href="https://www.instagram.com/altira_logistics/" target="_blank" rel="noreferrer"><Instagram color="#5f6166" height={35} width={35} stroke="#5f6166" strokeWidth={2}/></a>
                  <a href="https://www.linkedin.com/company/altira-s-r-o/" target="_blank" rel="noreferrer"><Linkedin color="#5f6166" height={30} width={30} /></a>
                </li>
              </ul>
            </div> 

        </div>

      </div>
    
    </div>
  );
}
