import React from 'react';
import {Route, Switch, HashRouter} from 'react-router-dom'

//lazy loading the components

const MainPage = React.lazy(() => import('./components/MainPage/MainPage'));
const Information = React.lazy(() => import('./components/Information/Information'));
const Ego = React.lazy(() => import('./components/Ego/Ego'));
const Lectura = React.lazy(() => import('./components/Lectura/Lectura'));
const Lidia = React.lazy(() => import('./components/Lidia/Lidia'));
const Oasis = React.lazy(() => import('./components/Oasis/Oasis'));
const TresRosas = React.lazy(() => import('./components/TresRosas/TresRosas'));

// const renderLoader = () => <div className="loader"></div>;

function App() {
  let mouseCursor = document.querySelector(".cursor")
  // let lis = document.querySelectorAll("li")

  window.addEventListener("mousemove", cursor)
  function cursor(e){
    mouseCursor.style.top = e.pageY + "px"
    mouseCursor.style.left = e.pageX + "px"
  }

  
  //TODO: en el fallback pots posar algu per si tardés a carregar alguna pagina tipus un spinner
  return (   
    <React.Suspense fallback={<div></div>}> 
    <div>
      <HashRouter basename="/">
      <Switch>
      <Route path="/" exact component={MainPage}/>
      <Route path="/info" exact component={Information}/>
      <Route path="/ego" exact component={Ego}/>
      <Route path="/lectura" exact component={Lectura}/>
      <Route path="/lidia" exact component={Lidia}/>
      <Route path="/oasis" exact component={Oasis}/>
      <Route path="/tresrosas" exact component={TresRosas}/>
      </Switch>
      </HashRouter>
    </div>
    </React.Suspense>
  );
}
export default App;