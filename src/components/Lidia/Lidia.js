import React from 'react';
import '../../index.css'
import './Lidia.css'
import leftarrow from '../../images/FLETXA_INFO.png'
import rightarrow from '../../images/FLETXA_INFO_D.png'
import '../MainPage/MainPage.css'


function Lidia() {
  return (
    <div>
      <div className='Name'>
        <li><a href={"/portfolio/#/"}>DAVID ALSINA MERCIER</a></li>
      </div>
      <div className='LeftArrow'>
        <li><a href={"/portfolio/#/ego"}>
          <img src={leftarrow} alt="arrow"/> 
        </a></li>
      </div>
      <div className='RightArrow'>
        <li><a href={"/portfolio/#/tresrosas"}>
          <img src={rightarrow} alt="arrow"/> 
        </a></li>
      </div>
  </div>
  );
}

export default Lidia;