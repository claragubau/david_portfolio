import React from 'react';
import '../MainPage/MainPage.css'
import './TresRosas.css'
import leftarrow from '../../images/FLETXA_INFO.png'
import rightarrow from '../../images/FLETXA_INFO_D.png'

import portada from './images/PNG_PORTADA_TRESROSAS.png'
import claqueta from './images/PNG_CLAQUETA_TRESROSAS.png'
import actriz from './images/PNG_ACTRIU_TRESROSAS.png'


function TresRosas() {
  return (
    <div>
      <div className='Name'>
        <a href={"/portfolio/#/"}>DAVID ALSINA MERCIER</a>
      </div>
      <div className='LeftArrow'>
        <a href={"/portfolio/#/lidia"}>
          <img src={leftarrow} alt="arrow"/> 
        </a>
      </div>
      <div className='RightArrow'>
        <a href={"/portfolio/#/lectura"}>
          <img src={rightarrow} alt="arrow"/> 
        </a>
      </div>
  </div>
  );
}

export default TresRosas;