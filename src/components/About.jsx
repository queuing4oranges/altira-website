import React, { useRef, useEffect, useState } from 'react';
import jana from "../images/jana.png";
import radek from "../images/radek.png";

export default function About() {
    const myRef = useRef();
    const [picAnimation, setPicAnimation] = useState();

  useEffect(() => {
    
    const observer = new IntersectionObserver((entries) => {
        
      const entry = entries[0]; //array of the elements being observed
    //   console.log(entry)
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                document.querySelector('.about-container__images_jana').classList.add('about-image-animation');
                
                document.querySelector('.about-container__images_radek').classList.add('about-image-animation');
              
            } else if(!entry.isIntersecting) {
                document.querySelector('.about-container__images_jana').classList.remove('about-image-animation');
                
                document.querySelector('.about-container__images_radek').classList.remove('about-image-animation');
                setPicAnimation(false);
            }

    })

    });


    observer.observe(myRef.current);
  }, [picAnimation]);


  return (
    <div id="onas" className="container">
        <div className="title-box">
            <h1>o nás</h1>
        </div>

        <div className="about-container">
            <div className="about-container__title">
                <p>Naše motto: „Pozorujeme, nasloucháme a reagujeme s respektem.“</p>
            </div>

            <div ref={myRef} className="about-container__images">
                <img className="about-container__images_jana about-image" src={jana} alt="jana pazoutova - ceo altira" />
                <img className="about-container__images_radek about-image" src={radek} alt="radek pistora - altira" />
            </div>

            <div className="about-container__names">
                <div className="about-container__names_jana">
                    <p>Ing. Jana Pažoutová</p>
                    <a href="mailto:jana.pazoutova@altira.cz">jana.pazoutova@altira.cz</a> 
                </div>
                <div className="about-container__names_radek">
                    <p>Radek Pištora</p>
                    <a href="mailto:radek.pistora@altira.cz">radek.pistora@altira.cz</a>
                </div>
            </div>
        </div>
    </div>
  )
}