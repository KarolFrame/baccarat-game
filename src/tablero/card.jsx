import React from 'react';
import "./card.css"

// const symbols = {
//   hearts: '♥',
//   diamonds: '♦',
//   clubs: '♣',
//   spades: '♠',
// };

function Card({ number, suit, top = 0, left = 0 }) {
  const symbols = {
    hearts: '♥',
    diamonds: '♦',
    clubs: '♣',
    spades: '♠',
  };

  const symbol = symbols[suit];
  const color = suit === 'hearts' || suit === 'diamonds' ? 'red' : 'black';

  return (
    <>
    <div className="card" style={{ top: `${top}px`, left: `${left}px` }}>
      <p className={`card-text card-number ${color}`}>{number} <br /> {symbol}</p>
      <p className={`card-symbol ${color}`}>{symbol}</p>
      <p className={`card-text card-number upside-down ${color}`}>{number} <br /> {symbol}</p>
    </div>
    </>
  );
}

export default Card;
