import React from 'react';
import './css/App.css';
import hero from './img/hero.png'
import icon from './img/centavo.png';
import appStory from './img/app_store.png';
import googlePlay from './img/google_play.png';

function App() {
  return (
    <div class="all">
      <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand"> <img src={icon}/> organizze</a>

      <div class="btn-group">
        <a class="btn btn-link">Cadastre-se</a>
        <a class="btn btn-success">Login</a>
        </div>
      </nav>
      <div class="hero">
      <section class="hero__img">
        <img src={hero}></img>
        </section>
        <div class="hero__container">
       
        <section class="hero__copy">
          <h1>Dinheiro traz felicidade</h1>
          <p>Sinta a satisfação de ter o controle de suas fianças em mãos e descomplique de vez a sua vida.</p>
          <section class="hero__story"> 
            <img src={appStory}/>
            <img src={googlePlay}/>
          </section>
        </section>
        
        
        </div>
      </div>

    </div>
  );
}

export default App;
