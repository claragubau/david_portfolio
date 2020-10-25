import React from 'react';
import '../../index.css'
import './Information.css'
import lateral from '../../images/FOTO_INFO.png'
import Arrow from '../../images/FLETXA_INFO.png'

function Information() {
  return (
    <div>
      <div className='Back'>
        <li><a href={"/#/"}>
          <img src={Arrow} alt="arrow"/>
        </a></li>
      </div>
      <div className="InfoText">
        <p>
          Diseñador visual enfocado en proyectos editoriales,
          <br/> 
          gráficos, audiovisuales y de dirección de arte.
        </p>
        <p>
          Atraído por el diseño narrativo para personas, 
          <br/>
          con fines sociales y culturales.
        </p> 
        <p>
          Interesado en el trabajo de conceptos psicológicos.
        </p> 
      </div> 
      <div className="Hablamos">
        ¿Hablamos?
      </div>
      <div className="Contact">
        <p> 
        +34 628 74 22 02
        <br/>
        davidalsinamercier@gmail.com 
        </p>
      </div>
      <div className="LateralPic">
        <img src={lateral} alt="prova"/>
      </div>

    </div>
  );
}

export default Information;