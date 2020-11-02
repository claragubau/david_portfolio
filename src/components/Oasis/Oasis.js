import React from 'react';
import '../../index.css'
import './Oasis.css'
import '../MainPage/MainPage.css'

//inicio
import leftarrow from '../../images/FLETXA_INFO.png'
import rightarrow from '../../images/FLETXA_INFO_D.png'
// primeras fotos 
import adaybea from './oasis_photos/PNG_ADAIBEA_OASIS.png'
import adallorando from './oasis_photos/PNG_ADAPLORANT_OASIS.png'
import adabebiendo from './oasis_photos/PNG_ADABEBENT_OASIS.png'
import kevin from './oasis_photos/PNG_KEVIN_OASIS.png'
// carteles
import carteltodos from './oasis_photos/PNG_CARTELLTOTS_OASIS.png'
import cartelada from './oasis_photos/PNG_CARTELLADA_OASIS.png'
import cartelkevin from './oasis_photos/PNG_CARTELLKEVIN_OASIS.png'
import carteladabea from './oasis_photos/PNG_CARTELLADAIBEA_OASIS.png'
//revista
import revista1 from './oasis_photos/PNG_REVISTA1_OASIS.png'
import revista2 from './oasis_photos/PNG_REVISTA2_OASIS.png'
import revista3 from './oasis_photos/PNG_REVISTA3_OASIS.png'
import revista4 from './oasis_photos/PNG_REVISTA4_OASIS.png'

import guion from './oasis_photos/MP4_GUIO_OASIS.mp4'

import lampara from './oasis_photos/PNG_LAMPARA_OASIS.png'
import vacaciones from'./oasis_photos/MP4_VACACIONES_OASIS.mp4'
import tele from './oasis_photos/MP4_TELE_OASIS.mp4'
import rayos from './oasis_photos/MP4_RAJOS_OASIS.mp4'
import neon from './oasis_photos/PNG_OASISNEON_OASIS.png'
import primavera from'./oasis_photos/MP4_PRIMAVERA_OASIS.mp4'
import pastillas from './oasis_photos/MP4_PASTILLES_OASIS.mp4'
import taza from './oasis_photos/MP4_TASSA_OASIS.mp4'
import menu from './oasis_photos/PNG_MENU_OASIS.png'

import filtro from './oasis_photos/MP4_FILTRE_OASIS.mp4'
import habitacion from './oasis_photos/MP4_INSTALACIO_OASIS.mp4'

import equipo from './oasis_photos/PNG_EQUIP_OASIS.png'


function Oasis() {
  return (
    <div>
      <div className='Name' style={{zIndex:6}}>
        <a href={"/portfolio/#/"}>DAVID ALSINA MERCIER</a>
      </div>
      <div className='LeftArrow'>
        <a href={"/portfolio/#/lectura"}>
          <img src={leftarrow} alt="arrow"/> 
        </a>
      </div>
      <div className='RightArrow'>
        <a href={"/portfolio/#/ego"}>
          <img src={rightarrow} alt="arrow"/> 
        </a>
      </div>
      <div className='FistPhotosText'>
        <img src={adaybea} alt="Ada y Bea"/>
        <p>
          <i>OASIS</i> es un proyecto transmedia creado por seis
          estudiantes de la <i>Escuela Universitaria ERAM</i>, que plantea
          una historia sobre el estado de ignorancia consciente como 
          forma de vida, sobre la intervención de fuentes externas que 
          impiden llegar a la esencia de la realidad, y sobre la dificultad
          de salir de la zona de confort.
        </p>
        <img src={adallorando} alt ="Ada llorando"/>
      </div>
      <div className="Superpuestas">
        <img src={adabebiendo} alt="Ada bebiendo cafè"/>
        <img src={kevin} alt="kevin" style={{marginTop:'-10vh', marginLeft:'30vw', position:'relative', zIndex:'-5'}}/>
      </div>
      <div className="GifGuion">
      <video autoPlay loop src={guion} alt="guió literari"/>
      <p>
          Nos cuenta la historia de Ada, una chica de
          dieciocho años que vive con su madre Bea
          en una antigua casa. Les ha llegado el
          momento de mudarse, pero Ada prefiere
          vivir dormida siguiendo las rutinas que le
          marca <i>OASIS</i>, una revista semanal. Aunque
          no quiera, tiene que aceptar que Bea murió
          y ya no vive con ella.
        </p>
      </div>
      <div className="Carteles">
        <img src={carteltodos} alt="Cartel con todos los actores del corto"/> 
        <img src={cartelada} alt="Cartel de Ada"/> 
        <img src={cartelkevin} alt="Cartel de Kevin"/> 
        <img src={carteladabea} alt="Cartel de Ada y Bea"/> 
      </div>
      <div className="TextoPlat">
        Se expresa a través de cuatro plataformas:
        <br/> 
        El cortometraje, eje principal que nos cuenta la historia que
        da sentido a las otras plataformas.
        <br/>
        El perfil de Instagram (
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/oasis.larevista/" style={{textDecoration:"underline"}}>@oasis.larevista</a>
        ) que encarna la revista
        semanal <i>OASIS</i>, producto del cortometraje.
        <br/>
        La <a target="_blank" rel="noopener noreferrer" href="https://oasiselproyecto.com/" style={{textDecoration:"underline"}}>página web</a> que 
        nos ayuda a conocer la historia más
        profundamente.También ayuda en la promoción del proyecto.
        <br/>
        La instalación inmersiva donde se recrea la habitación de Ada
        para que la espectadora pueda experimentar en el mundo de
        la protagonista y ahondar en la temática del proyecto.
      </div>
      <div className="OasisRevista">
          <img src={revista1} alt="revista 1"/>
          <img src={revista2} alt="revista 2"/>
          <img src={revista3} alt="revista 3"/>
          <img src={revista4} alt="revista 4"/>
      </div>
      <div className="OasisProducts">
          <img alt="Lampara plasma oasis" src={lampara}/>
          <video autoPlay loop src={vacaciones} alt="Vacaciones logo oasis"/>
          <video autoPlay loop src={tele} alt="Tele logo OASIS"/>
          <video autoPlay loop src={rayos} alt="Rayos oasis"/>
          <img alt="Oasis neon" src={neon}/>
          <video autoPlay loop src={primavera} alt="Primavera"/>  
          <video autoPlay loop src={pastillas} alt="Pastillas logo OASIS"/>
          <video autoPlay loop src={taza} alt="Taza logo OASIS"/>
          <img alt="Menú calendario mensual" src={menu}/>
      </div>
      <div className="OasisFilter">
        <video autoPlay loop src={filtro} alt="Video ejemplo del filtro"/>
      </div>
      <div className="OasisHab">
        <video autoPlay loop src={habitacion} alt="Habitación de Ada"/>
      </div>
      <div className="EquipoOasis">
        <img src={equipo} alt="foto del equipo"/>
      </div>
      <div className="TextoEquipoOasis">
        <p>
          <b>Idea, guión y dirección:</b> David Alsina
          <br/>
          <b>Directora de postproducción:</b> Isabel Pérez
          <br/>
          <b>Ayudante de dirección:</b> Lluís Cascales
          <br/>
          <b>Dirección de arte:</b> Maria Boquera
          <br/>
          <b>Dirección de producción:</b> Marta Cámara
          <br/>
          <b>DoP y responsable de transmedia:</b> Pau Simón
        </p>
      </div>

    </div>
  );
}

export default Oasis;