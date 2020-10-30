import React from 'react';
import '../../index.css'
import './Lectura.css'
import leftarrow from '../../images/FLETXA_INFO.png'
import rightarrow from '../../images/FLETXA_INFO_D.png'
import '../MainPage/MainPage.css'


function Lectura() {
  return (
    <div>
      <div className='Name'>
        <a href={"/portfolio/#/"}>DAVID ALSINA MERCIER</a>
      </div>
      <div className='LeftArrow'>
        <a href={"/portfolio/#/tresrosas"}>
          <img src={leftarrow} alt="arrow"/> 
        </a>
      </div>
      <div className='RightArrow'>
        <a href={"/portfolio/#/oasis"}>
          <img src={rightarrow} alt="arrow"/> 
        </a>
      </div>
  </div>
  );
}

export default Lectura;