import React, { useState } from 'react';

/*
let upLikes = 0;
let downLikes = 0;

const btnUp = document.querySelector('#btn-up');
const btnDown = document.querySelector('#btn-down');

btnUp.addEventListener('click', () => {
  upLikes += 1;
  const likesUpElm = document.querySelector('#likes-up');
  likesUpElm.textContent = upLikes;
});

btnDown.addEventListener('click', () => {
  downLikes += 1;
  const likesDownElm = document.querySelector('#likes-down');
  likesDownElm.textContent = downLikes;
}); */

export const Joke = (props) => {
  const [upLikes, setUpLikes] = useState(0);
  const [downLikes, setDownLikes] = useState(0);

  const handleUpLikes = () => {
    setUpLikes(upLikes + 1);
  };

  const handleDownLikes = () => {
    setDownLikes(downLikes + 1);
  };

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            {/*             {props.joke.id} */}
            <img
              className="user-avatar"
              src={props.joke.avatar ? props.joke.avatar : null}
              alt={`Tady má být avatar ${props.joke.avatar}`}
            />
            <p className="user-name">{props.joke.name}</p>
          </div>

          <p className="joke__text">{props.joke.text}</p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={handleUpLikes}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {upLikes}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={handleDownLikes}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {downLikes}
          </span>
        </div>
      </div>
    </div>
  );
};
