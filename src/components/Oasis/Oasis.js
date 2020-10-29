import React from 'react';
import '../../index.css'
import './Oasis.css'
import one from './oasis_photos/FOTO_OASIS_1.png'
import two from './oasis_photos/FOTO_OASIS_2.png'
import three from './oasis_photos/FOTO_OASIS_3.png'
import four from './oasis_photos/FOTO_OASIS_4.2.png'
import eigth from './oasis_photos/FOTO_OASIS_8.2.png'
import leftarrow from '../../images/FLETXA_INFO.png'
import rightarrow from '../../images/FLETXA_INFO_D.png'
import twelve from './oasis_photos/GIF_OASIS_2.gif'
import onetwo from './oasis_photos/FOTO_OASIS_1.2.png'
import quad2 from './oasis_photos/GIF_OASIS_3.1.mov'
import quad3 from './oasis_photos/GIF_OASIS_4.1.mov'
import quad4 from './oasis_photos/GIF_OASIS_5.1.mov'
import quad6 from './oasis_photos/GIF_OASIS_6.1.mov'
import quad7 from './oasis_photos/GIF_OASIS_7.1.mov'
import quad8 from './oasis_photos/GIF_OASIS_8.1.mov'
import quad1 from './oasis_photos/FOTO_OASIS_12.png'
import quad5 from './oasis_photos/FOTO_OASIS_13.png'
import quad9 from './oasis_photos/FOTO_OASIS_14.png'
import '../MainPage/MainPage.css'


function Oasis() {
  return (
    <div>
      <div className='Name' style={{zIndex:6}}>
        <li><a href={"/portfolio/#/"}>DAVID ALSINA MERCIER</a></li>
      </div>
      <div className='LeftArrow'>
        <li><a href={"/portfolio/#/lectura"}>
          <img src={leftarrow} alt="arrow"/> 
        </a></li>
      </div>
      <div className='RightArrow'>
        <li><a href={"/portfolio/#/ego"}>
          <img src={rightarrow} alt="arrow"/> 
        </a></li>
      </div>
      <div className='Oasis1'>
        <img src={one} alt="oasis"/>
        <p>
          <i>OASIS</i> es un proyecto transmedia creado por seis
          estudiantes de la <i>Escuela Univeristaria ERAM</i>, que plantea
          una historia sobre el estado de ignorancia consciente como 
          forma de vida, sobre la intervención de fuentes externas que 
          impiden llegar a la esencia de la realidad, y sobre la dificultad
          de salir de la zona de confort.
        </p>
        <img src={onetwo} alt ="oasis12"/>
      </div>
      <div className="Oasis2">
        <img src={two} alt="2nd pic"/>
        <img src={three} alt="3d pic" style={{marginTop:'-10vh', marginLeft:'30vw', position:'relative', zIndex:'-5'}}/>
      </div>
      <div className="Oasis3">
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
      <div className="Oasis4">
        <img src={four} alt="cartells"/> 
      </div>
      <div className="Oasis5">
        Se expresa a través de cuatro plataformas:
        <br/> 
        El cortometraje, eje principal que nos cuenta la historia que
        da sentido a las otras plataformas.
        <br/>
        El perfil de Instagram (@oasis.larevista) que encarna la revista
        semanal <i>OASIS</i>, producto del cortometraje.
        <br/>
        La página web que nos ayuda a conocer la historia más
        profundamente.También ayuda en la promoción del proyecto.
        <br/>
        La instalación inmersiva donde se recrea la habitación de Ada
        para que la espectadora pueda experimentar en el mundo de
        la protagonista y ahondar en la temática del proyecto.
      </div>
      <div className="Oasis6">
        <div className="aux6">
          <img src={eigth} alt="revista1"/>
        </div>
      </div>
      <div className="Oasis7">
          <img alt="italian trulli" src={quad1}/>
          <video autoPlay loop src={quad4} alt="trulli"/>
          <video autoPlay loop src={quad7} alt="italian trulli"/>
          <video autoPlay loop src={quad2} alt="trulli"/>
          <img alt="italian trulli" src={quad5}/>
          <video autoPlay loop src={quad8} alt="italian trulli"/>
          <video autoPlay loop src={quad3} alt="trulli"/>
          <video autoPlay loop src={quad6} alt="italian trulli"/>        
          <img alt="italian trulli" src={quad9}/>
      </div>

    </div>
  );
}

export default Oasis;