// import * as serviceWorker from './serviceWorker';
import './fonts/HelveticaNeue.ttf'
import './fonts/HelveticaNeue-Italic.ttf'
import './fonts/HelveticaNeueBold.ttf'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

// ReactDOM.render(
//     <App/>, 
//     document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
class Prova extends React.Component {
    state = {
      xMain: 0,
      yMain: 0,
    }
    
    handleMouseMove = (e) => {
      const { clientX, clientY } = e;
        this.setState({
        xMain: clientX,
        yMain: clientY,
      }, () => {
      })
    }
  
    render = () => {
      const {
        xMain,
        yMain
      } = this.state;
  
      return (
        <div>
        <div
          className='container'
          onMouseMove={e => this.handleMouseMove(e)}
        >

          <div className='cursors'>
            <div 
              className='cursor'
              style={{ 
                left: xMain, 
                top: yMain,
              }}
            />
          </div>
          <App/>
        </div>

        </div>
        )
    }
  }
  
  ReactDOM.render(<Prova />, document.getElementById('root'));