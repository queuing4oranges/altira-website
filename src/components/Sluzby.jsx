import React, { useEffect } from 'react'; 
import chyb from "../images/chyb.png";
import interim from "../images/interim.png";
import optimalizace from "../images/optimalizace.png";
import outsourcing from "../images/outsourcing.png";
import CheckCircle from '../icons/CheckCircle';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Sluzby() {

    useEffect(() => {
      AOS.init();

    }, [])

    return (
    <div id="sluzby-cont" className="container">
        <div className="title-box">
            <h1>Služby</h1>
        </div>

        <section className="sluzby-section"> 

            <div 
            data-aos="fade-right" 
            data-aos-easing="linear"
            data-aos-duration="500"
            className="sluzby-section__text">
                <div className="sluzby-section__text_title">
                    <h2>Poradenství / Optimalizace</h2>
                </div>
                
                <ul className="sluzby-section__text_list">
                    <li><CheckCircle width={20} height={20} color="#FA8900"/><p>zmapování log. procesů</p></li>
                    <li><CheckCircle width={20} height={20} color="#FA8900"/><p>definice případných nedostatků</p></li>
                    <li><CheckCircle width={20} height={20} color="#FA8900"/><p>návrh řešení včetně optimalizace</p></li>
                </ul>
                <div className="sluzby-section__text_description">
                    <p>Vypracujeme analýzu celého logistického procesu napříč firmou, připravíme návrhy řešení zlepšení jednotlivých kroků procesu včetně optimalizace a pomůžeme s implementací vybraného řešení</p>
                </div>
            </div>
      
            <div className="sluzby-section__image">
                <img src={optimalizace} alt="two notebooks and people working" />
            </div>
        </section>


        <section className="sluzby-section"> 

            <div className="sluzby-section__image">
                <img src={chyb} alt="diagram of organigram with hand drawing" />
            </div>

            <div 
            data-aos="fade-left" 
            data-aos-easing="linear"
            data-aos-duration="500"
            className="sluzby-section__text">

                <div className="sluzby-section__text_title">
                    <h2>Řešení chyb v procesu</h2>
                </div>
                
                <ul className="sluzby-section__text_list">
                    <li><CheckCircle width={20} height={20} color="#FA8900"/><p>zmapování log. procesů</p></li>
                    <li><CheckCircle width={20} height={20} color="#FA8900"/><p>definice nedostatků</p></li>
                    <li><CheckCircle width={20} height={20} color="#FA8900"/><p>nasazení krizového týmu</p></li>
                    <li><CheckCircle width={20} height={20} color="#FA8900"/> <p>definování týmů (vývojový diagram)</p></li>
                </ul>
                <div className="sluzby-section__text_description">
                    <p>Vypracujeme analýzu celého logistického procesu napříč firmou, připravíme návrhy řešení zlepšení jednotlivých kroků procesu včetně optimalizace, nasadíme krizový tým, který bude součástí procesu na denní bázi a bude schopen řešit nedostatky okamžitě.</p>
                </div>
            </div>
        </section>

        <section className="sluzby-section"> 

            <div 
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="500" 
            className="sluzby-section__text">
                <div className="sluzby-section__text_title">
                    <h2>Interim Management</h2>
                </div>
                
                <ul className="sluzby-section__text_list">
                    <li><CheckCircle width={20} height={20} color="#FA8900"/><p>manažer logistiky</p></li>
                    <li><CheckCircle width={20} height={20} color="#FA8900"/><p>disponent</p></li>
                    <li><CheckCircle width={20} height={20} color="#FA8900"/><p>plánování výroby</p></li>
                    <li><CheckCircle width={20} height={20} color="#FA8900"/><p>dispečer přeprav</p></li>
                </ul>
                <div className="sluzby-section__text_description">
                    <p>Dodáme odborníka, na výše uvedené pozice. Stává se nejen plnohodnotným členem vašeho týmu, ale ihned pracuje na cílech, které jsou jasně stanovené (definované a odsouhlasené) daného interim projektu.</p>
                </div>
            </div>
      
            <div className="sluzby-section__image">
                <img src={interim} alt="people looking together at a visualisation on a table" />
            </div>
        </section>
    
            <section className="sluzby-section"> 

            <div className="sluzby-section__image">
                <img src={outsourcing} alt="warehouse from above" />
            </div>

            <div 
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="500" 
            className="sluzby-section__text">

                <div className="sluzby-section__text_title">
                    <h2 style={{marginBottom: "0"}}>Vedení interních logistik / </h2><br /> 
                    <h2 style={{marginTop: "0"}}>Outsourcing</h2>
                        
                </div>
                
                <ul className="sluzby-section__text_list">
                    <li><CheckCircle width={20} height={20} color="#FA8900"/><p>převzetí interní logistiky</p></li>
                    <li><CheckCircle width={20} height={20} color="#FA8900"/><p>zastřešení celého procesu svým personálem</p></li>
                </ul>
                <div className="sluzby-section__text_description">
                    <p>Vypracujeme analýzu celého logistického procesu napříč firmou, připravíme návrhy řešení zlepšení jednotlivých kroků procesu včetně optimalizace, nasadíme krizový tým, který bude součástí procesu na denní bázi a bude schopen řešit nedostatky okamžitě.</p>
                </div>
            </div>
        </section>  
    </div>
  )
}

    // const myRef = useRef();
    // const [isIntersecting, setIsIntersecting] = useState()

    // useEffect(() => {
    //   const observer = new IntersectionObserver((entries) => {
    //     const entry = entries[0];

    //     entries.forEach(entry => {
    //         if(entry.isIntersecting) {
    //             document.querySelector('.sluzby-section__text').classList.add('fly-in-from-left');
    //         } else if(!entry.isIntersecting) {
    //             document.querySelector('.sluzby-section__text').classList.remove('fly-in-from-left');
    //             setIsIntersecting(false);
    //         }
    //     })
    //   })
    
    //   observer.observe(myRef.current);
    // }, [isIntersecting])