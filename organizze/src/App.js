import React from 'react';
import './css/App.css';
import './css/user.css';
import './css/time_money.css';
import hero from './img/hero.png'
import icon from './img/centavo.png';
import appStory from './img/app_store.png';
import googlePlay from './img/google_play.png';
import handPhone from './img/hand-mock.png';
import time from './img/iphone.png';
import time_back from './img/half-oval.svg';
import card from './img/img-cards.png';

function App() {
  return (
    <div class="all">
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand"> <img src={icon} /> organizze</a>

        <div class="btn-group">
          <a class="btn btn-link">Cadastre-se</a>
          <a class="btn btn-success">Login</a>
        </div>
      </nav>
      <div class="hero">

        <div class="hero__container">

          <section class="hero__copy">
            <h1>Dinheiro traz felicidade</h1>
            <p>Sinta a satisfação de ter o controle de suas finanças em mãos e descomplique de vez a sua vida.</p>

            <section class="hero__story">
              <img src={appStory} />
              <img src={googlePlay} />

            </section>

          </section>
          <section class="hero__img">
            <img src={hero}></img>
          </section>


        </div>
      </div>
      <div class="users">
        <section class="users__container">
          <section class="img">
            <img src={handPhone} />
          </section>
          <article class="users__copy">
            <h1>Usado por mais de 2 milhões  de pessoas</h1>
            <p>
              Tenha suas contas e cartões num único lugar e saiba exatamente para onde vai o seu dinheiro.
                </p>
          </article>
        </section>
        
      </div>

      <div class="time_money">
        <div class="time__container">
          <section class="time__copy">
            <h2>Tempo é dinheiro</h2>
            <p>No Organizze você controla sua grana em segundos e não perde tempo. Tenha tudo sob controle e aproveite seu tempo com o que realmente importa pra você!</p>
          </section>
          <div class="time__img">

            <div class="one">
              <img class="time" src={time} />
            <div class="hero__story">
              <img src={appStory}/>
              <img src={googlePlay}/>
              </div>
              <img class="card" src={card} />
            </div>

            <div class="two" >
              <img src={time_back} />
            </div>

          </div>
        </div>
        </div>
    </div>
  );
}

export default App;