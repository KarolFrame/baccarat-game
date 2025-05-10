import React from 'react';
import "./card.css"

function Card({ number, suit, hidden}) {
  const symbols = {
    hearts: '♥',
    diamonds: '♦',
    clubs: '♣',
    spades: '♠',
  };

  const symbol = symbols[suit];
  const color = suit === 'hearts' || suit === 'diamonds' ? 'red-card' : 'black-card';

  return (
    <>
    <div className={`card ${hidden ? "hidden" : ""}`}>
      <p className={`card-text card-number ${color}`}>{number} <br /> {symbol}</p>
      <p className={`card-symbol ${color}`}>{symbol}</p>
      <p className={`card-text card-number upside-down ${color}`}>{number} <br /> {symbol}</p>
    </div>
    </>
  );
}

export default Card;
