import React from 'react';
import Reliability from '../icons/Reliability';
import Responsibility from '../icons/Responsibility';
import Transparency from '../icons/Transparency';
import Flexibility from '../icons/Flexibility';
import Fairness from '../icons/Fairness';

export default function ImageSlider() {


  return (
    <div className="values-container">
      <div className="slider__container">
          <div className="slider-card" >
            <h3 className="slider-card__title">spohlelivost</h3>
            <Reliability color="#FA8900" height={70} width={70} />
            <p className="slider-card__text">bezpečnost a jistota</p>
          </div>

          <div className="slider-card" >
            <h3 className="slider-card__title">zodpovědnost</h3>
            <Responsibility color="#FA8900" height={70} width={70} />
            <p className="slider-card__text">pečlivé vedení týmu</p>
          </div>

          <div className="slider-card" >
            <h3 className="slider-card__title">transparentnost</h3>
            <Transparency color="#FA8900" height={70} width={70} />
            <p className="slider-card__text">otevřenost, upřímnost, možnost zapojení se do rozhodovacího procesu</p>
          </div>

          <div className="slider-card" >
            <h3 className="slider-card__title">flexibilita</h3>
            <Flexibility color="#FA8900" height={70} width={70} />
            <p className="slider-card__text">pružnost a přizpůsobivost</p>
          </div>

          <div className="slider-card" >
            <h3 className="slider-card__title">férovost</h3>
            <Fairness color="#FA8900" height={70} width={70} />
            <p className="slider-card__text">„k druhým se chováme tak, jak chceme, aby se oni chovali k nám“</p>
          </div>


      </div>
    </div>
  )
}

