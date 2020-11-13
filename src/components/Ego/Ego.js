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

import tegusta from './images/PNG_TEGUSTA_EGO.jpg'
import aimg from './images/PNG_A_EGO.jpg'

import alterego1 from './images/PNG_ALTEREGO1_EGO.jpg'
import alterego2 from './images/PNG_ALTEREGO2_EGO.jpg'

import pesado from './images/PNG_PESADO_EGO.jpg'
import toxico from './images/PNG_TOXICO_EGO.jpg'
import faqs from './images/PNG_FAQS_EGO.jpg'

import garantia from './images/PNG_GARANTIA_EGO.jpg'
import comprados from './images/PNG_COMPRADOS_EGO.jpg'
import valoraciones from './images/PNG_VALORACIONES_EGO.jpg'

import contraportada from './images/PNG_CONTRAPORTADA_EGO.jpg'

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
        <br/>
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
        <div className="Col1Ego">
          <img src={vaya} alt="Vaya foto ego" style={{paddingBottom:"8px", paddingRight:"8px"}}/>
          <img src={narciso} alt="Narciso foto ego" style={{paddingTop:"8px", paddingRight:"8px"}}/>
        </div>
        <div className="Col2Ego">
        <img src={nohagas} alt="No hagas lo que no" style={{paddingLeft:"8px"}} />       
        </div>
      </div>
      <div className="TegustaEgo">
        <div style={{width:"min-content"}}>
          <img src={tegusta} alt="te gusta foto" style={{paddingBottom:"8px"}}/>
          <img src={aimg} alt="a" style={{paddingTop:"8px"}}/>
        </div>

        <p>
          Construido con ilustraciones y
          diseños que retratan situaciones
          donde el ego siempre es el
          protagonista.
          <br/>
          Estructurado como un manual,
          con sus modelos, sus modos,
          su servicio técnico...
          <br/>
          Basado en el ego de las redes.
        </p>
      </div> 
      <div className="AlterEgo">
        <img src={alterego1} alt="alterego" style={{paddingRight:"8px"}}/>
        <img src={alterego2} alt="alterego2" style={{paddingLeft:"8px"}}/>
      </div>
      <div className="PesadoEgo">
        <img src={pesado} alt="pesado ego"/>
        <img src={toxico} alt="toxico ego"/>
        <img src={faqs} alt="faqs ego"/>

      </div>
      <div className="GarantiaEgo">
        <img src={garantia} alt="garantia" style={{paddingRight:"8px"}}/>
        <div className="LateralEgo">
          <img src={comprados} alt="comprados juntos" style={{paddingBottom:"8px", paddingLeft:"8px"}}/>
         <img src={valoraciones} alt="valoraciones ego" style={{paddingTop:"8px", paddingLeft:"8px"}}/>
        </div>
      </div>
      <img src={contraportada} alt="contraportada" style={{marginTop:"17.5vh", marginBottom:"17.5vh", width:"100%", height:"auto"}}/>
  </div>
  );
  }
}

export default Ego;