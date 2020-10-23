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
          <div className="hover-image"><img width="1620" alt="italian trulli" height="1080" width_o="1620" height_o="1080" src={david} data-mid="52437443" border="0"/></div>
          <br/>

          <div className="hover-title">
            <li><a href={"/#/ego"}>EGO EL MANUAL<sup>.TXT+IMG</sup></a></li>
          </div>
          <div className="hover-image"><img width="1620" alt="italian trulli" height="1080" width_o="1620" height_o="1080" src={david2} data-mid="52437443" border="0"/></div>
          <br/>

          <div className="hover-title">
            <li><a href={"/#/lidia"}>LÍDIA OLIU PSICOLOGIA<sup>.IMG</sup></a></li>
          </div>
          <div className="hover-image"><img width="1620" alt="italian trulli" height="1080" width_o="1620" height_o="1080" src={david} data-mid="52437443" border="0"/></div>
          <br/>

          <div className="hover-title">
            <li><a href={"/#/tresrosas"}>TRES ROSAS<sup>.MP4</sup></a></li>
          </div>
          <div className="hover-image"><img width="1620" alt="italian trulli" height="1080" width_o="1620" height_o="1080" src={david2} data-mid="52437443" border="0"/></div>
          <br/>

          <div className="hover-title">
            <li><a href={"/#/lectura"}>LECTURA OBLIGATORIA<sup>.MP4</sup></a></li>
          </div>
          <div className="hover-image"><img width="1620" alt="italian trulli" height="1080" width_o="1620" height_o="1080" src={david} data-mid="52437443" border="0"/></div>
          <br/>
          
        </div>
      <div className='Information'>
        <li><a href={"/#/info"}>INFO</a></li>
      </div>
    </div>
  );
}

export default MainPage;
