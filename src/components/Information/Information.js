import React from 'react';
import {Component} from 'react';
import '../../index.css'
import './Information.css'
import lateral from '../../images/FOTO_INFO.png'
import Arrow from '../../images/FLETXA_INFO.png'

// const Mailto = ({ email, children }) => {
//   return (
//     <a href={`mailto:${email}`}>{children}</a>
//   );
// };


class Information extends Component{

  render(){
    return(
    <div>
      <div className='Back'>
        <li><a href={"/portfolio/#/"}>
          <img src={Arrow} alt="arrow"/>
        </a></li>
      </div>
      <div className="Content">
        <div className="InfoText">
          <p>
            Diseñador visual enfocado en proyectos editoriales,
            gráficos, audiovisuales y de dirección de arte.
          </p>
          <p>
            Atraído por el diseño narrativo para personas, 
            con fines sociales y culturales.
          </p> 
          <p>
            Interesado en el trabajo de conceptos psicológicos.
          </p> 
          <div className="Hablamos">
            ¿Hablamos?
          </div>
        </div>
        <div className="Lateral">
          <img src={lateral} alt="prova" className="LateralPic"/>
          <p style={{marginTop:"1vh"}}> 
          +34 628 74 22 02
          <br/>
          {/* <Mailto email="davidalsinamercier@gmail.com">
            <u>davidalsinamercier@gmail.com</u>
          </Mailto> */}
          <a href="mailto:davidalsinamercier@gmail.com"><u>avidalsinamercier@gmail.com</u></a>
          </p>
          <p className="Desarrollada">
            Página web desarrollada por <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/clara-gubau-2486ab149" style={{textDecoration:"underline"}}>
            Clara Gubau Gubert
            </a>
          </p>
        </div>
      </div>
    </div>

    )
  }
}


export default Information;