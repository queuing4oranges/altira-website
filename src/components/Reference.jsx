import React from 'react'
import Ocun from '../icons/Ocun'
import Schedl from '../icons/Schedl'
import Twr from '../icons/Twr'

export default function Reference() {
  return (
    <div id="refer-cont" className="container">
        <div className="title-box">
            <h1>Reference</h1>
        </div>

        <div className="reference-cards">
            <div className="ref-card">
                <div className="ref-card__image">
                    <Ocun width={150} height={29} />
                </div>
                <div className="ref-card__text">
                    <p>vedení logistiky, plánování výroby, příprava podkladů pro dotační programy</p>
                </div>
            </div>

            <div className="ref-card">
                <div className="ref-card__image">
                   <Schedl width={113} height={69} /> 
                </div>
                <div className="ref-card__text">
                    <p>vedení logistiky</p>
                </div>
            </div>

            <div className="ref-card">
                <div className="ref-card__image">
                    <Twr width={119} height={55} />
                </div>
                <div className="ref-card__text">
                    <p>vedení logistiky – provoz - montáž zadních náprav (Jablonec nad NISOU)</p>
                </div>
            </div>
        </div>
    </div>
  )
}
