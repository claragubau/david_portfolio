import React from 'react';
import '../../index.css'
import './MainPage.css'
import david from '../../images/david.jpg'
import david2 from '../../images/foto2.jpg'

function MainPage() {
  return (
    <div className="Fixed">
      <div className='Name'>DAVID ALSINA MERCIER</div>
      <div className='Center'>
          <div className="hover-title">
            <li><a href={"/#/oasis"}>OASIS<sup>.MP4</sup></a></li>
          </div>
          <div className="hover-image"><img alt="italian trulli" src={david}/></div>
          <br/>

          <div className="hover-title">
            <li><a href={"/#/ego"}>EGO EL MANUAL<sup>.TXT+IMG</sup></a></li>
          </div>
          <div className="hover-image"><img alt="italian trulli" src={david2}/></div>
          <br/>

          <div className="hover-title">
            <li><a href={"/#/lidia"}>LÍDIA OLIU PSICOLOGIA<sup>.IMG</sup></a></li>
          </div>
          <div className="hover-image"><img alt="lidia" src={david}/></div>
          <br/>

          <div className="hover-title">
            <li><a href={"/#/tresrosas"}>TRES ROSAS<sup>.MP4</sup></a></li>
          </div>
          <div className="hover-image"><img alt="rosas" src={david2}/></div>
          <br/>

          <div className="hover-title">
            <li><a href={"/#/lectura"}>LECTURA OBLIGATORIA<sup>.MP4</sup></a></li>
          </div>
          <div className="hover-image"><img alt="lectura" src={david}/></div>
          <br/>
          
        </div>
      <div className='Information'>
        <li><a href={"/#/info"}>INFO</a></li>
      </div>
    </div>
  );
}

export default MainPage;
