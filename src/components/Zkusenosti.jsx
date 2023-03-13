import React from 'react'
import ArrowBull from '../icons/ArrowBull'

export default function Zkusenosti() {
  return (
    <div id="zkus-cont" className="container zkus-container__background">
        <div className="title-box">
            <h1>Naše zkušenosti</h1>
        </div>

        <div className="zkus-list">
            <ul className="zkus-list__ul">
                <li className="zkus-list__ul_li">
                    <ArrowBull width={40} height={40} color="#fa8900" />
                    <p>vedení logistiky ve výrobních závodech</p>
                </li>
                <li className="zkus-list__ul_li">
                    <ArrowBull width={40} height={40} color="#fa8900" />
                    <p>vedení procesů logistiky dodávaných dílů způsoby JIS, <br />
                        JIT, KANBAN, CROSSDOCK</p>
                </li>
                <li className="zkus-list__ul_li">
                    <ArrowBull width={40} height={40} color="#fa8900" />
                    <p>projektové řízení</p>

                </li>
                <li className="zkus-list__ul_li">
                    <ArrowBull width={40} height={40} color="#fa8900" />
                    <p>přípravy procesů a dokumentce k certifikaci</p>
                </li>
                <li className="zkus-list__ul_li">
                    <ArrowBull width={40} height={40} color="#fa8900" />
                    <p>zpracování podkladů k dotačním programům</p>
                </li>
            </ul>
        </div>
    </div>
  )
}
