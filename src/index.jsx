import React from 'react';
import { render } from 'react-dom';
import './style.css';

import { jokes } from './jokes';
import { Joke } from './Joke';

const DUMMY_JOKES = [
  {
    id: 'user01',
    avatar:
      'https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png',
    name: 'Neroxx',
    text: 'The secret service isn\'t allowed to yell "Get down!" anymore when the president is about to be attacked. Now they have to yell "Donald, duck!"',
    likes: 13,
    dislikes: 24,
  },
];

const App = () => (
  <div class="container">
    <div class="joke">
      <div class="joke__body">
        <div class="joke__user">
          <img
            class="user-avatar"
            src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
          />
          <p class="user-name">Neroxx</p>
        </div>

        <p class="joke__text">
          The secret service isn't allowed to yell "Get down!" anymore when the
          president is about to be attacked. Now they have to yell "Donald,
          duck!"
        </p>
      </div>
      <div class="joke__likes">
        <button id="btn-up" class="btn-like btn-like--up"></button>
        <span id="likes-up" class="likes-count likes-count--up">
          0
        </span>
        <button id="btn-down" class="btn-like btn-like--down"></button>
        <span id="likes-down" class="likes-count likes-count--down">
          0
        </span>
      </div>
    </div>
  </div>
);

render(<App />, document.querySelector('#app'));

/* 
const AddMovie = () => {
  return <div>Formulář pro přidání filmu</div>;
};

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Filmotéka</h1>
      </header>
      <main>
        <Movies seznamFilmu={DUMMY_JOKES} />
        <AddMovie />
      </main>
    </div>
  );
}; */

/* 


const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Filmotéka</h1>
      </header>
      <main>
        <Movies seznamFilmu={DUMMY_MOVIES} />
        <AddMovie />
      </main>
    </div>
  );
};

render(<App />, document.querySelector('#app')); */
