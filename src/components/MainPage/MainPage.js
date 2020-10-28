import React from 'react';
import '../../index.css'
import './MainPage.css'
import oasis from './images/GIF_OASIS_1.gif'
import lectura from './images/GIF_LO_1.gif'
import tresrosas from './images/GIF_TRESROSAS_1.gif'

function MainPage() {
  return (
    <div className="Fixed">
      <div className='Name'>DAVID ALSINA MERCIER</div>
      <div className='Center'>
          <div className="hover-title">
            <li><a href={"/portfolio/#/oasis"}>OASIS<sup>.MOV</sup></a></li>
          </div>
          <div className="hover-image"><img alt="italian trulli" src={oasis}/></div>
          <br/>

          <div className="hover-title">
            <li><a href={"/portfolio/#/ego"}>EGO EL MANUAL<sup>.TXT+IMG</sup></a></li>
          </div>
          <div className="hover-image"><img alt="italian trulli" src={oasis}/></div>
          <br/>

          <div className="hover-title">
            <li><a href={"/portfolio/#/lidia"}>LÍDIA OLIU PSICOLOGIA<sup>.IMG</sup></a></li>
          </div>
          <div className="hover-image"><img alt="lidia" src={tresrosas}/></div>
          <br/>

          <div className="hover-title">
            <li><a href={"/portfolio/#/tresrosas"}>TRES ROSAS<sup>.MOV</sup></a></li>
          </div>
          <div className="hover-image"><img alt="rosas" src={tresrosas}/></div>
          <br/>

          <div className="hover-title">
            <li><a href={"/portfolio/#/lectura"}>LECTURA OBLIGATORIA<sup>.MOV</sup></a></li>
          </div>
          <div className="hover-image"><img alt="lectura" src={lectura}/></div>
          <br/>
          
        </div>
      <div className='Information'>
        <li><a href={"/portfolio/#/info"}>INFO</a></li>
      </div>
    </div>
  );
}

export default MainPage;
