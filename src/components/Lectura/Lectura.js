import React from 'react';
import '../../index.css'
import '../MainPage/MainPage.css'
import './Lectura.css'

import leftarrow from '../../images/FLETXA_INFO.png'
import rightarrow from '../../images/FLETXA_INFO_D.png'

import portada from './images/PNG_PORTADA_LO.png'
import mockup1 from './images/PNG_MOCKUP1_LO.png'
import mockup2 from './images/PNG_MOCKUP2_LO.png'
import ojos from './images/PNG_ULLS_LO.png'
import figuras from './images/PNG_FIGURES_LO.png'


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
      <div className="PortadaLO">
        <img src={portada} alt="portada"/> 
        <p>
          <i>LECTURA OBLIGATORIA</i> es un proyecto de diseño y
          motion graphics para un podcast sobre reseñas,
          recomendaciones y discusión de libros de todos los
          géneros.
        </p>
      </div>
      <div className="Mockups">
        <img src={mockup1} alt="first mockup"/>
        <img src={mockup2} alt="second mockup"/>
      </div>
      <img src={ojos} alt="ojos" className="Ojos"/>
      <div className="Piezas">
        <img src={figuras} alt="piezas"/>
      </div>
      <div className="TextoLO">
        <p>
          Sistema construido partiendo de la diversidad de
          contenido y de la narración de este.
          Elementos y formas interpretando conceptos, libros,
          temas y disciplinas.
        </p>

      </div>
      <iframe src="https://youtu.be/pFx7qr_dP-Y" title="trailer" className="VideoLO"/>
  </div>
  );
}

export default Lectura;