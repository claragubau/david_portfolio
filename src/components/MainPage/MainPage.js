import React from 'react';
import '../../index.css'
import './MainPage.css'
import oasis from './images/MP4_OASIS_HOME.mp4'
import lectura from './images/MP4_LO_HOME.mp4'
import tresrosas from './images/MP4_TRESROSAS_HOME.mp4'

function MainPage() {
  return (
    <div className="Fixed">
      <div className='Name'>DAVID ALSINA MERCIER</div>
      <div className='Center'>
          <div className="hover-title">
            <a href={"/portfolio/#/oasis"}>OASIS<sup>.MOV</sup></a>
          </div>
          <div className="hover-image"><video autoPlay loop alt="italian trulli" src={oasis}/></div>
          <br/>

          <div className="hover-title">
            <a href={"/portfolio/#/ego"}>EGO EL MANUAL<sup>.TXT+IMG</sup></a>
          </div>
          <div className="hover-image"><video autoPlay loop alt="italian trulli" src={lectura}/></div>
          <br/>

          <div className="hover-title">
            <a href={"/portfolio/#/lidia"}>LÍDIA OLIU PSICOLOGIA<sup>.IMG</sup></a>
          </div>
          <div className="hover-image"><video autoPlay loop alt="italian trulli" src={lectura}/></div>
          <br/>

          <div className="hover-title">
            <a href={"/portfolio/#/tresrosas"}>TRES ROSAS<sup>.MOV</sup></a>
          </div>
          <div className="hover-image"><video autoPlay loop alt="rosas" src={tresrosas}/></div>
          <br/>

          <div className="hover-title">
            <a href={"/portfolio/#/lectura"}>LECTURA OBLIGATORIA<sup>.MOV</sup></a>
          </div>
          <div className="hover-image"><video autoPlay loop alt="italian trulli" src={lectura}/></div>
          <br/>
      </div>
      <div className='Information'>
        <a href={"/portfolio/#/info"}>INFO</a>
      </div>
    </div>
  );
}

export default MainPage;
