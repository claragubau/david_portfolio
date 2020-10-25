import React from 'react';
import '../../index.css'
import './Oasis.css'
import one from './oasis_photos/FOTO_OASIS_1.png'
import two from './oasis_photos/FOTO_OASIS_2.png'
import three from './oasis_photos/FOTO_OASIS_3.png'
import four from './oasis_photos/FOTO_OASIS_4.png'
import five from './oasis_photos/FOTO_OASIS_5.png'
import six from './oasis_photos/FOTO_OASIS_6.png'
import seven from './oasis_photos/FOTO_OASIS_7.png'
import eigth from './oasis_photos/FOTO_OASIS_8.png'
import nine from './oasis_photos/FOTO_OASIS_9.png'
import ten from './oasis_photos/FOTO_OASIS_10.png'
import eleven from './oasis_photos/FOTO_OASIS_11.png'
import leftarrow from '../../images/FLETXA_INFO.png'

function Oasis() {
  return (
    <div>
      <div className='Name' style={{zIndex:6}}>
        <li><a href={"/#/"}>DAVID ALSINA MERCIER</a></li>
      </div>
      <div className='Arrows'>
        <li><a href={"/#/info"}>
          <img src={leftarrow} alt="arrow"/> 
        </a></li>

      </div>
      <div className='Oasis1'>
        <img src={one} alt="oasis"/>
        <p>
          <i>OASIS</i> es un proyecto transmedia creado por seis
          <br/>
          estudiantes de la <i>Escuela Univeristaria ERAM</i>, que plantea
          <br/>
          una historia sobre el estado de ignorancia consciente como 
          <br/>
          forma de vida, sobre la intervención de fuentes externas que 
          <br/>
          impiden llegar a la esencia de la realida, y sobre la dificultad
          <br/>
          de salir de la zona de confort.
        </p>
      </div>
      <div className="Oasis2">
        <img src={two} alt="2nd pic"/>
        <img src={three} alt="3d pic" style={{top:'-10vh', left:'30vw', position:'relative', zIndex:'-1'}}/>
      </div>
      <div className="Oasis3">
      <img src={eleven} alt="guió literari"/>
      <p>
          Nos cuenta la historia de Ada, una chica de
          dieciocho años que vive con su madre Bea
          en una antigua casa. Les ha llegado el
          momento de mudarse, pero Ada prefiere
          vivir dormida siguiendo las rutinas que le
          marca OASIS, una revista semanal. Aunque
          no quiera, tiene que aceptar que Bea murió
          y ya no vive con ella.
        </p>
      </div>
      <div className="Oasis4">
        <img src={four} alt="cartell1"/>
        <img src={five} alt="cartell2"/>
        <img src={six} alt="cartell3"/>
        <img src={seven} alt="cartell4"/>
      </div>
      <div className="Oasis5">
      Se expresa a través de cuatro plataformas:
      <br/> 
      El cortometraje, eje principal que nos cuenta la historia que
      da sentido a las otras plataformas.
      <br/>
      El perfil de Instagram (@oasis.larevista) que encarna la revista
      semanal OASIS, producto del cortometraje.
      <br/>
      La página web que nos ayuda a conocer la historia más
      profundamente.
      <br/>
      La instalación inmersiva donde se recrea la habitación de Ada
      para que la espectadora pueda experimentar en el mundo de
      la protagonista y ahondar en la temática del proyecto.
      </div>

    </div>
  );
}

export default Oasis;