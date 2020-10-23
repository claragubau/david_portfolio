import React from 'react';
import '../../index.css'
import './Information.css'

function Information() {
  return (
    <div>
      <div className='Name'>
        <li><a href={"/#/"}>DAVID ALSINA MERCIER</a></li>
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
        +34 62 87 4 22 02
        <br/>
        davidalsinamercier@gmail.com 
      </div>

    </div>
  );
}

export default Information;