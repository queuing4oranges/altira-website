import React from 'react'
import ArrowBull from '../icons/ArrowBull'

export default function Zkusenosti() {
  return (
    <div id="zkus-cont" className="container zkus-container__background">
        <div className="title-box">
            <h1>Naše zkušenosti</h1>
        </div>

        <div className="zkus-list">
            <div className="zkus-list__item">
                <div className="zkus-list__item_icon">
                    <ArrowBull width={40} height={40} color="#fa8900" />
                </div>
                <div className="zkus-list__item_text">
                    <p>vedení logistiky ve výrobních závodech</p>
                </div>
            </div>

            <div className="zkus-list__item">
                <div className="zkus-list__item_icon">
                    <ArrowBull width={40} height={40} color="#fa8900" />
                </div>
                <div className="zkus-list__item_text">
                    <p>vedení procesů logistiky dodávaných dílů způsoby JIS,
                        JIT, KANBAN, CROSSDOCK</p>
                </div>
            </div>

            <div className="zkus-list__item">
                <div className="zkus-list__item_icon">
                    <ArrowBull width={40} height={40} color="#fa8900" />
                </div>
                <div className="zkus-list__item_text">
                    <p>projektové řízení</p>
                </div>
            </div>

            <div className="zkus-list__item">
                <div className="zkus-list__item_icon">
                    <ArrowBull width={40} height={40} color="#fa8900" />
                </div>
                <div className="zkus-list__item_text">
                    <p>přípravy procesů a dokumentce k certifikaci</p>
                </div>
            </div>

            <div className="zkus-list__item">
                <div className="zkus-list__item_icon">
                    <ArrowBull width={40} height={40} color="#fa8900" />
                </div>
                <div className="zkus-list__item_text">
                    <p>zpracování podkladů k dotačním programům</p>
                </div>
            </div>
          
        </div>
    </div>
  )
}
