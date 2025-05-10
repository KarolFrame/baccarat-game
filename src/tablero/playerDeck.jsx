import React from 'react';
import "./playerDeck.jsx"
import Card from './card';

function PlayerDeck({forwardCard, topCard}) {
  return (
    <>
      <Card number={forwardCard.number} suit={forwardCard.suit} hidden={forwardCard.hidden} />
      <div style={{ top: 10, left: 30, position: "absolute" }}>
        <Card number={topCard.number} suit={topCard.suit} hidden={topCard.hidden}/>
      </div>
    </>
  );
}

export default PlayerDeck;