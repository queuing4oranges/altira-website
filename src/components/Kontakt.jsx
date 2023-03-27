import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Envelope from '../icons/Envelope'
import Phone from '../icons/Phone'
import swal from 'sweetalert';
import GoogleMap from '../icons/GoogleMap';
import Facebook from '../icons/Facebook';
import Instagram from '../icons/Instagram';
import Linkedin from '../icons/Linkedin';

export default function Kontakt() {
    const form = useRef();
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const sendContactForm= (e) => {
        e.preventDefault();
        
        emailjs.sendForm (
            serviceId, 
            templateId, 
            form.current,
            publicKey
        )
        .then((result) => {console.log(result.text);
            e.target.reset();
        },
        (error) => {
            console.log(error.text);
        })
        swal("Děkujeme!", "Ozveme se co nejdříve.", "success");
    }


  return (
    <div id="kontakt-cont" className="kontakt-body">
        <div className="container">
            <div className="title-box title-box_white">
                <h1>Kontakt</h1>
            </div>
            
        <div className="kontakt-container">
            <div className="kontakt__address">
                <div className="kontakt__address_details">
                    <div className="kontakt__address_details-post">
                        <h3>ALTIRA s.r.o.</h3> <br />
                        <p>Veselice 68, Dolní Bousov 294 04</p>
                        <p>IČ: 24838756</p>
                        <p>Číslo účtu: 243113907/0300</p>
                    </div>
                    <div className="kontakt__address_details-media">
                        <div>
                            <Envelope width={24} height={24} color="#FAFCFF" />
                            <a href="mailto:info@altira.cz">info@altira.cz</a>
                        </div>
                        <div>
                            <Phone width={24} height={24} color="#FAFCFF" />
                            <a href="tel:00420 605 700 815">+420 605 700 815</a>
                        </div>
                        <br />

                        <div className="kontakt__address_details-social">
                            <a href="https://www.facebook.com/Altira_logistics-121211334246543/" target="_blank"><Facebook color="#FAFCFF" height={24} width={24} /></a>
                            <a href="https://www.instagram.com/altira_logistics/" target="_blank" rel="noreferrer"><Instagram color="#FAFCFF" height={25} width={25} stroke="#FAFCFF" strokeWidth={2}/></a>
                            <a href="https://www.linkedin.com/company/altira-s-r-o/" target="_blank" rel="noreferrer"><Linkedin color="#FAFCFF" height={24} width={24} /></a>
                        </div>
                    </div>
                </div>
                <div className="kontakt__address_map">
                    <GoogleMap width={450} height={250}/>
                </div>
            </div>

            <div className="kontakt__form">
                <h3>spojte se s námi</h3>
                <form ref={form} onSubmit={sendContactForm}>
                <div className="kontakt__form_sender">
                    <div className="kontakt__form_sender-input">
                        <label htmlFor="name">Jméno</label>
                        <input type="text" id="name" name="user_name" required />
                    </div>
                    <div className="kontakt__form_sender-input">
                        <label htmlFor="email">Váš email</label>
                        <input name="user_email" type="email" id="email" placeholder="name@email.cz" />
                    </div>
                    <div className="kontakt__form_sender-input">
                        <label htmlFor="phone">Telefon</label>
                        <input name="telephone" type="tel" id="phone" placeholder="777 888 999" required/>
                    </div>
                    <div className="kontakt__form_sender-input">
                        <textarea name="message" id="" cols="30" rows="10" placeholder="Dobrý den, mám zájem o bližší informace..." required minLength={20}>
                        </textarea>
                    </div>   
                </div>

                <div className="kontakt__form_button">
                    <button className="contact-button" type="submit">odeslat</button>
                </div>
                </form>
            </div>
        </div>
            
        </div>
    </div>
  )
}
