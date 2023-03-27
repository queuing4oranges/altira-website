import React, { useEffect } from 'react'; 
import chyb from "../images/chyb.png";
import interim from "../images/interim.png";
import optimalizace from "../images/optimalizace.png";
import outsourcing from "../images/outsourcing.png";
import sklad from "../images/sklad.png";
import CheckCircle from '../icons/CheckCircle';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Sluzby() {

    useEffect(() => {
      AOS.init();

    }, [])

    return (
    <div id="sluzby-cont" className="container sluzby-cont">
        <div className="title-box">
            <h1>Služby</h1>
        </div>

        <section className="sluzby-section"> 

            <div 
            data-aos="fade-right" 
            data-aos-easing="linear"
            data-aos-duration="500"
            className="sluzby-section__text padding-right">
                <div className="sluzby-section__text_title">
                    <h2>Poradenství / Optimalizace</h2>
                </div>
                
                <ul className="sluzby-section__text_list">
                    <li><CheckCircle width={20} height={20} color="#FA8900"/><p>zmapování logistických procesů</p></li>
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


        <section className="sluzby-section column-reverse"> 

            <div className="sluzby-section__image padding-right">
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
                    <li><CheckCircle width={20} height={20} color="#FA8900"/><p>zmapování logistických procesů</p></li>
                    <li><CheckCircle width={20} height={20} color="#FA8900"/><p>definice nedostatků</p></li>
                    <li><CheckCircle width={20} height={20} color="#FA8900"/><p>nasazení krizového týmu</p></li>
                    <li><CheckCircle width={20} height={20} color="#FA8900"/> <p>definování týmů (vývojový diagram)</p></li>
                </ul>
                <div className="sluzby-section__text_description">
                    <p>Vypracujeme analýzu celého logistického procesu napříč firmou, připravíme návrhy řešení a zlepšení jednotlivých kroků procesu, včetně optimalizace, nasadíme krizový tým, který bude součástí procesu na denní bázi a bude schopen řešit nedostatky okamžitě.</p>
                </div>
            </div>
        </section>

        <section className="sluzby-section"> 

            <div 
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="500" 
            className="sluzby-section__text padding-right">
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
                    <p>Dodáme odborníka na výše uvedené pozice. Stává se nejen plnohodnotným členem vašeho týmu, ale ihned pracuje na cílech, které jsou jasně stanovené (definované a odsouhlasené) daného interim projektu.</p>
                </div>
            </div>
      
            <div className="sluzby-section__image">
                <img src={interim} alt="people looking together at a visualisation on a table" />
            </div>
        </section>
    
            <section className="sluzby-section column-reverse"> 

            <div className="sluzby-section__image padding-right">
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
                    <p>Porovnáme výhody a nevýhody jednotlivých řešení IN/OUT sorcingu a doporučíme vám to, které bude pro vaši firmu nejvýhodnější. Jsme schopni vést interní logistiky. Možná rizika převezmeme na nás.</p>
                </div>
            </div>
        </section>  

        <section className="sluzby-section"> 

            <div 
            data-aos="fade-right" 
            data-aos-easing="linear"
            data-aos-duration="500"
            className="sluzby-section__text padding-right">
                <div className="sluzby-section__text_title">
                    <h2>Skladová logistika</h2>
                </div>
                
                <ul className="sluzby-section__text_list">
                    <li><CheckCircle width={20} height={20} color="#FA8900"/><p>audit logistiky</p></li>
                    <li><CheckCircle width={20} height={20} color="#FA8900"/><p>návrh skladu</p></li>
                    <li><CheckCircle width={20} height={20} color="#FA8900"/><p>layout</p></li>
                    <li><CheckCircle width={20} height={20} color="#FA8900"/><p>řídící systém ve skladování</p></li>
                </ul>
                <div className="sluzby-section__text_description">
                    <p>Zmapujeme současný stav vašich logistických procesů. Připravíme komplexní návrh uspořádání skladu. Naplánujeme optimální procesy včetně vhodných konkrétních technologií a manipulační techniky.</p>
                </div>
            </div>
      
            <div className="sluzby-section__image">
                <img src={sklad} alt="warehouse" />
            </div>
        </section>

    </div>
  )
}
