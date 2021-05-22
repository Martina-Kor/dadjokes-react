import React from 'react';
import { render } from 'react-dom';
import './style.css';

/* import { jokes } from './jokes'; */
import { Joke } from './Joke';

const joke1 = {
  id: 'user01',
  userAvatar:
    'https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png',
  userName: 'Neroxx',
  text: 'The secret service isn\'t allowed to yell "Get down!" anymore when the president is about to be attacked. Now they have to yell "Donald, duck!"',
  likes: 13,
  dislikes: 24,
};

const joke2 = {
  id: 'user01',
  userAvatar:
    'https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png',
  userName: 'Neroxx',
  text: 'The secret service isn\'t allowed to yell "Get down!" anymore when the president is about to be attacked. Now they have to yell "Donald, duck!"',
  likes: 13,
  dislikes: 24,
};

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Vtipy</h1>
      </header>
      <main>
        <Joke joke={joke1} />
        {/*         <Joke joke={joke2} /> */}
        {/*   <Jokes listOfJokes={DUMMY_JOKES} /> */}
      </main>
    </div>
  );
};

render(<App />, document.querySelector('#app'));

{
  /*  const App = () => {
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
}; 
 */
}

{
  /* const App = () => {
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
 */
}
