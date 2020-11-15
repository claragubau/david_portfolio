import React from 'react';
import '../../index.css'
import './MainPage.css'
import oasis from './images/MP4_OASIS_HOME.mp4'
import lectura from './images/MP4_LO_HOME.mp4'
import tresrosas from './images/MP4_TRESROSAS_HOME.mp4'
import ego from './images/PNG_EGO_HOME.jpg'

function MainPage() {
  return (
    <div>
    <div className="Fixed">
      <div className='Name'>DAVID ALSINA MERCIER</div>
      <div className='Information'>
        <a href={"/portfolio/#/info"}>INFO</a>
      </div>
      </div>
      <div className='Center'>
      <div className="hover-title">
        <a href={"/portfolio/#/oasis"}>OASIS<sup>.MOV</sup></a>
      </div>
      <div className="hover-image"><video autoPlay muted loop alt="oasis gif" src={oasis}/></div>
        <br/>

        <div className="hover-title">
          <a href={"/portfolio/#/ego"}>EGO EL MANUAL<sup>.TXT+IMG</sup></a>
        </div>
        <div className="hover-image"><img src={ego} alt="ego el manual"/></div>
        <br/>

        <div className="hover-title">
          <a href={"/portfolio/#/lidia"}>LÍDIA OLIU PSICOLOGÍA<sup>.IMG</sup></a>
        </div>
        <div className="hover-image"><video autoPlay muted loop alt="lectura obligatoria gif" src={tresrosas}/></div>
        <br/>

        <div className="hover-title">
          <a href={"/portfolio/#/tresrosas"}>TRES ROSAS<sup>.MOV</sup></a>
        </div>
        <div className="hover-image"><video autoPlay muted loop alt="tres rosas gif" src={tresrosas}/></div>
        <br/>

        <div className="hover-title">
          <a href={"/portfolio/#/lectura"}>LECTURA OBLIGATORIA<sup>.MOV</sup></a>
        </div>
        <div className="hover-image"><video autoPlay muted loop alt="lectura obligatoria gif" src={lectura} style={{height:"70vh"}}/></div>
        <br/>
      </div>
    </div>
  );
}

export default MainPage;
