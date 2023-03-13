import React from 'react'
import Envelope from '../icons/Envelope';
import Phone from '../icons/Phone';

export default function Footer() {
    const currentYear = new Date();
  return (
    <div className="footer-container">
        <div className="container">
        <div className="footer-left">
            <p>Copyright © {currentYear.getFullYear()} ALTIRA s.r.o. All rights reserved.</p>
            <p>Vytvořila Katja Zenker <a href="https://www.itisgoodtohave.me/" target="_blank" rel="noreferrer">https://www.itisgoodtohave.me/</a>
                </p>
        </div>

        <div className="footer-right">
            <div className="footer-right__mail">
                <Envelope width={24} height={24} color="#FAFCFF" />
                <a href="mailto:info@altira.cz">info@altira.cz</a>
            </div>
            <div className="footer-right__phone">
                <Phone width={24} height={24} color="#FAFCFF" />
                <a href="tel:00420 605 700 815">+420 605 700 815</a>
            </div>
        </div>
        
</div>
    </div>
  )
}
