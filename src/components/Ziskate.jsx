import React, {useEffect} from 'react'; 
import Blob from '../icons/Blob';
import Triangle from '../icons/Triangle';
import Line from '../icons/Line';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Ziskate() {

    useEffect(() => {
      AOS.init();
    }, [])

  return (
    <div 
    data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="500" 
    className="container zis-container">
        <div className="zis-container__outside zis-container__outside_top">
            <Line width={1000} height={4} stroke="#11446E" strokeWidth="3" /> 
        </div>
        
        <div className="zis-container__middle">

            <div className="zis-container__middle_triangle">
                <div className="zis-container__middle_triangle-form">
                    <Triangle width={296} height={233} stroke="#F4A261" /> 
                    <div className="zis-container__middle_triangle-text">
                    <p>Co od nás získáte?</p>
                    </div>
                </div>
            </div>

            <div className="zis-container__middle_blob">
                <div className="zis-container__middle_blob-form">
                    <Blob width={250} height={180} color="#11446e" />
                    <div className="zis-container__middle_blob-text">
                    <p>Rychlost/ <br />Odbornost / <br />Řešení krizových <br />situací</p>
                    </div>
                </div>  
            </div>

            <div className="zis-container__middle_description">
                <div className="zis-container__middle_description-top">
                    <p>To, co vás trápí dokážeme vyřešit k vaši spokojenosti. Ručíme za dlouhodobou udržitelnost a funkčnost, pokud budou definované nástroje používány.</p>
                </div>
                <div className="zis-container__middle_description-bottom">
                    <p>Pracujeme dle termínovaného plánu, který je oběma stranami na začátku každého projektu odsouhlasen. Ručíme za výsledky celého našeho týmu. <br />
                        ALTIRA</p>
                </div>
            </div>
        </div>
        
        <div className="zis-container__outside zis-container__outside_bottom">
            <Line width={1000} height={4} stroke="#11446E" strokeWidth="3"/>
        </div>
        <br /><br />
    </div>
  )
}
