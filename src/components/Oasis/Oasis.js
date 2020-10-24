import React from 'react';
import '../../index.css'
import './Oasis.css'
import first from '../../images/foto2.jpg'

function Oasis() {
  return (
    <div>
      <div className='Name' style={{zIndex:6}}>
        <li><a href={"/#/"}>DAVID ALSINA MERCIER</a></li>
      </div>
      <div className='Oasis1'>
        <img src={first} alt="oasis"/>
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
        <img src={first} alt="2nd pic"/>
        <img src={first} alt="3d pic" style={{top:'-15vh', left:'25vw', position:'relative', zIndex:'-1'}}/>
      </div>

    </div>
  );
}

export default Oasis;