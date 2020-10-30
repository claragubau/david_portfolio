import React from 'react';
import '../../index.css'
import './MainPage.css'
import oasis from './images/GIF_OASIS_1.2.mov'
import lectura from './images/GIF_LO_2.webp'
import tresrosas from './images/GIF_TRESROSAS_1.2.mov'

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
          <div className="hover-image"><img style={{width:"100vh", height:"auto"}} alt="italian trulli" src={lectura}/></div>
          <br/>

          <div className="hover-title">
            <a href={"/portfolio/#/lidia"}>LÍDIA OLIU PSICOLOGIA<sup>.IMG</sup></a>
          </div>
          <div className="hover-image"><img alt="lidia" src={lectura}/></div>
          <br/>

          <div className="hover-title">
            <a href={"/portfolio/#/tresrosas"}>TRES ROSAS<sup>.MOV</sup></a>
          </div>
          <div className="hover-image"><video autoPlay loop alt="rosas" src={tresrosas}/></div>
          <br/>

          <div className="hover-title">
            <a href={"/portfolio/#/lectura"}>LECTURA OBLIGATORIA<sup>.MOV</sup></a>
          </div>
          <div className="hover-image"><img alt="lectura" src={lectura}/></div>
          <br/>
          
        </div>
      <div className='Information'>
        <a href={"/portfolio/#/info"}>INFO</a>
      </div>
    </div>
  );
}

export default MainPage;
