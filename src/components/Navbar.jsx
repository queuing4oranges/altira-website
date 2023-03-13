import React from "react";
import { Link } from 'react-scroll';
import AltiraLogo from "../icons/AltiraLogo";

export default function Navbar() {



  return (
    <div className="navbar-container">
    <div className="navbar">
      <div className="navbar__logo">
        <Link activeClass="none" smooth spy to="home-cont" ><AltiraLogo width={92} height={36} /></Link>
        
      </div>
      <div className="navbar__links">
        <Link activeClass="active" smooth spy to="sluzby-cont" >služby</Link>
        <Link activeClass="active" smooth spy to="zkus-cont" >naše zkušenosti</Link>
        <Link activeClass="active" smooth spy to="onas" >o nás</Link>
        <Link activeClass="active" smooth spy to="kontakt-cont" >kontakt</Link>
        <Link activeClass="active" smooth spy to="refer-cont" >reference</Link>       
      </div>
    </div></div>
  );
}
