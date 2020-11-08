import React from 'react';
import '../../index.css'
import '../MainPage/MainPage.css'
import './Ego.css'

import leftarrow from '../../images/FLETXA_INFO.png'
import rightarrow from '../../images/FLETXA_INFO_D.png'

// fotos de la página

import portada from './images/PNG_PORTADA_EGO.jpg'
import bienvenida from './images/PNG_BIENVENIDA_EGO.jpg'

function Ego() {
  return (
    <div>
      <div id={"top"} className='Name'>
        <a href={"/portfolio/#/"}>DAVID ALSINA MERCIER</a>
      </div>
      <div className='LeftArrow'>
        <a href={"/portfolio/#/oasis"}>
          <img src={leftarrow} alt="arrow"/> 
        </a>
      </div>
      <div className='RightArrow'>
        <a href={"/portfolio/#/lidia"}>
          <img src={rightarrow} alt="arrow"/> 
        </a>
      </div>
      <div className="EgoPortada">
        <img src={portada} alt="Portada Ego"/> 
        <p>
        <i>EGO, EL MANUAL</i> es un producto editorial que
        evidencia y ridiculiza el ego de la sociedad.
        Se trata de un manual de instrucciones para
        aprender a manejar nuestro propio ego.
        <br/>
        Porque... ¿Alguien sabe como funciona?
        </p>
      </div>
      <img src={bienvenida} alt="foto bienvenida" className="Bienvenida"/>
  </div>
  );
}

export default Ego;