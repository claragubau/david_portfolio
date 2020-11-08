import React, {Component} from 'react';
import '../../index.css'
import '../MainPage/MainPage.css'
import './Ego.css'

import leftarrow from '../../images/FLETXA_INFO.png'
import rightarrow from '../../images/FLETXA_INFO_D.png'

// fotos de la página

import portada from './images/PNG_PORTADA_EGO.jpg'
import bienvenida from './images/PNG_BIENVENIDA_EGO.jpg'
import inicio from './images/PNG_INICIO_EGO.jpg'
import hola from './images/PNG_HOLA_EGO.jpg'
import joc from './images/PNG_JOC_EGO.jpg'
import ups from './images/PNG_UPS_EGO.jpg'

import vaya from './images/PNG_VAYA_EGO.jpg'
import nohagas from './images/PNG_NOHAGAS_EGO.jpg'
import narciso from './images/PNG_NARCISO_EGO.jpg'

class Ego extends Component {
  render(){
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
      <div className="InicioEgo">
        <div className="InicioFlex">
          <img src={inicio} alt="inicio rapido libro" style={{paddingRight:"8px"}}/>
          <img src={hola} alt="hola este es ego" style={{paddingLeft:"8px"}}/>
        </div>
      </div>
      <div className="JuegoEgo">
        <img src={joc} alt="foto juego" style={{paddingBottom:"8px"}}/>
        <img src={ups} alt="foto ups" style={{paddingTop:"8px"}}/>
      </div>
      <div className="VayaEgo">
        <img src={vaya} alt="Vaya foto ego" style={{paddingBottom:"8px"}}/>
        <img src={narciso} alt="Narciso foto ego" style={{paddingTop:"8px"}}/>
        <img src={nohagas} alt="No hagas lo que no" style={{paddingLeft:"8px"}} />
      </div>
  </div>
  );
  }
}

export default Ego;