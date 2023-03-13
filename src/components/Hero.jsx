import React from 'react'; 
import HeroImage from "../images/altira-hero.png";
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <div id="home-cont" className="container">
        <div className="hero__container">
            <div className="hero-text">
                <h1 className="hero-text__title">poradenství / optimalizace / <br /> interim management
                </h1> 
                <p className="hero-text__description">
                    Jsme nadšenci, kteří se v logistice především v
                    automobilovém průmyslu pohybují přes 20 let
                    Rádi své zkušenosti předáváme a uplatňujeme tam, kde
                    je potřeba.
                </p>
                <div className="hero-text__button-container">
                    <button className="hero-text__button hero-text__button_transparent"><Link activeClass="active" smooth spy to="sluzby-cont" ><p>více informací</p></Link>
                    </button>
                    <a href="mailto:info@altira.cz"><button className="hero-text__button hero-text__button_filled"><p>napište nám</p></button></a>
                        
                </div>
            </div>

            <div className="hero-image">
                <img src={HeroImage} alt="two people sitting on desk" />
            </div>

        </div>
    </div>
  )
}
