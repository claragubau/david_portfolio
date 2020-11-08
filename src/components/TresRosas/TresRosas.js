import React from 'react';
import '../MainPage/MainPage.css'
import './TresRosas.css'
import '../../index.css'
import leftarrow from '../../images/FLETXA_INFO.png'
import rightarrow from '../../images/FLETXA_INFO_D.png'

import portada from './images/PNG_PORTADA_TRESROSAS.png'
import claqueta from './images/PNG_CLAQUETA_TRESROSAS.png'
import actriz from './images/PNG_ACTRIU_TRESROSAS.png'
import mesita from './images/PNG_TAULETA_TRESROSAS.png'
import wc from './images/PNG_LAVABO_TRESROSAS.png'
import caja from './images/PNG_CAIXA_TRESROSAS.png'
import cotxe from './images/PNG_COTXE_TRESROSAS.png'

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
      <div className="PortadaRosas">
        <img src={portada} alt="Portada Tres Rosas"/>
        <p>
          <i>TRES ROSAS</i> es un cortometraje de ficción que nace del
          choque cultural en relación a la diversidad sexual.
          Tergiversa y denuncia parte de la cultura gitana y de la
          estricta religión.
        </p>
      </div> 
      <div className="CocheyActriz">
        <img src={claqueta} alt="coche tres rosas"/>
        <img src={actriz} alt="actriz tres rosas"/> 
      </div> 
      <img src={mesita} alt="mesita" className="Mesa"/>
      <div className="Lavabo">
        <img src={wc} alt="actriz en el baño"/>
      </div>
      <p className="TextoRosas">
      Sexo duro, sadismo y violencia heterosexual matrimonial
      hablan de la peor experiencia para Zita, fiel a su Santa.
      Con sentimiento de liberación como impulso, se lanza a
      los genitales de aquella chica. El alba reúne a Zita a su
      santuario.
      <br/> 
      Dos pecados que confesar:
      <br/>
      #SexoSinMatrimonio #DesfloradaPorUnHombre.
      <br/>
      Lesbianismo como religión. Zita es gitana, Zita es una fiel
      lesbiana, Zita es virgen y pura porque su pañuelo tiene
      tres rosas.
      </p>
      <div className="Cajas">
        <img src={caja} alt="caja tres rosas"/>
      </div> 
      <img src={cotxe} alt="coche tres rosas" className="Coche"/>
      <div className="EquipoRosas">
      <p >
        <b>Idea, guión y dirección</b>: David Alsina
        <br/>
        <b>Directora de producción</b>: Isabel Pérez
        <br/>
        <b>Ayudante de dirección</b>: David Escolano
        <br/>
        <b>Dirección de arte</b>: Maria Boquera
        <br/>
        <b>Dirección de fotografía</b>: Marta Cámara
        <br/>
        <b>Dirección de sonido</b>: Biel Geli
      </p>
      </div>
  </div>
  );
}

export default TresRosas;