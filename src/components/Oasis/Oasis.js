import React from 'react';
import '../../index.css'
import './Oasis.css'
// primeras fotos 
import primera from './oasis_photos/FOTO_OASIS_1.png'
import segona from './oasis_photos/FOTO_OASIS_1.2.png'
import tercera from './oasis_photos/FOTO_OASIS_2.png'
import cuarta from './oasis_photos/FOTO_OASIS_3.png'
// carteles
import cartel1 from './oasis_photos/FOTO_OASIS_4.png'
import cartel2 from './oasis_photos/FOTO_OASIS_5.png'
import cartel3 from './oasis_photos/FOTO_OASIS_6.png'
import cartel4 from './oasis_photos/FOTO_OASIS_7.png'
//revista
import revista1 from './oasis_photos/FOTO_OASIS_8.png'
import revista2 from './oasis_photos/FOTO_OASIS_9.png'
import revista3 from './oasis_photos/FOTO_OASIS_10.png'
import revista4 from './oasis_photos/FOTO_OASIS_11.png'
//inicio
import leftarrow from '../../images/FLETXA_INFO.png'
import rightarrow from '../../images/FLETXA_INFO_D.png'
//
import twelve from './oasis_photos/GIF_OASIS_2.gif'
import quad2 from './oasis_photos/GIF_OASIS_3.1.mov'
import quad3 from './oasis_photos/GIF_OASIS_4.1.mov'
import quad4 from './oasis_photos/GIF_OASIS_5.1.mov'
import quad6 from './oasis_photos/GIF_OASIS_6.1.mov'
import quad7 from './oasis_photos/GIF_OASIS_7.1.mov'
import quad8 from './oasis_photos/GIF_OASIS_8.1.mov'
import quad1 from './oasis_photos/FOTO_OASIS_12.png'
import quad5 from './oasis_photos/FOTO_OASIS_13.png'
import quad9 from './oasis_photos/FOTO_OASIS_14.png'
import petra from './oasis_photos/GIF_OASIS_9.mov'
import habitacio from './oasis_photos/GIF_OASIS_10.mov'
import equip from './oasis_photos/FOTO_OASIS_15.png'
import '../MainPage/MainPage.css'


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
        <img src={primera} alt="primera foto"/>
        <p>
          <i>OASIS</i> es un proyecto transmedia creado por seis
          estudiantes de la <i>Escuela Univeristaria ERAM</i>, que plantea
          una historia sobre el estado de ignorancia consciente como 
          forma de vida, sobre la intervención de fuentes externas que 
          impiden llegar a la esencia de la realidad, y sobre la dificultad
          de salir de la zona de confort.
        </p>
        <img src={segona} alt ="ada"/>
      </div>
      <div className="Superpuestas">
        <img src={tercera} alt="ada cafè"/>
        <img src={cuarta} alt="kevin" style={{marginTop:'-10vh', marginLeft:'30vw', position:'relative', zIndex:'-5'}}/>
      </div>
      <div className="GifGuion">
      <img src={twelve} alt="guió literari"/>
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
        <img src={cartel1} alt="cartells"/> 
        <img src={cartel2} alt="cartells"/> 
        <img src={cartel3} alt="cartells"/> 
        <img src={cartel4} alt="cartells"/> 
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
          <img alt="italian trulli" src={quad1}/>
          <video autoPlay loop src={quad4} alt="trulli"/>
          <video autoPlay loop src={quad7} alt="italian trulli"/>
          <video autoPlay loop src={quad2} alt="trulli"/>
          <img alt="italian trulli" src={quad5}/>
          <video autoPlay loop src={quad8} alt="italian trulli"/>
          <video autoPlay loop src={quad3} alt="trulli"/>
          <video autoPlay loop src={quad6} alt="italian trulli"/>        
          <img alt="calendario" src={quad9}/>
      </div>
      <div className="OasisFilter">
        <video autoPlay loop src={petra} alt="filtergif"/>
      </div>
      <div className="OasisHab">
        <video autoPlay loop src={habitacio} alt="habitacionada"/>
      </div>
      <div className="FotoEquipo">
        <img src={equip} alt="foto del equipo"/>
      </div>
      <div className="Oasis11">
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