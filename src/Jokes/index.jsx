import React from 'react';
import { Joke } from '../Joke';

export const Jokes = (props) => {
  return (
    <>
      <h2>Vtipy</h2>
      <ul>
        {props.listOfJokes.map((joke, index) => {
          return <Joke {...joke} key={joke.index} />;
        })}
      </ul>
    </>
  );
};
