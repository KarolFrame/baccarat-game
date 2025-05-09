import React from 'react';
import "./card.css"
import CardBack from './cardBack';

function Deck() {
  return (
    <>
    <CardBack/>
    <div style={{top: -15, left: -15, position: "absolute"}}><CardBack/></div>
    <div style={{top: -30, left: -30, position: "absolute"}}><CardBack/></div>
    <div style={{top: -45, left: -45, position: "absolute"}}><CardBack/></div>
    <div style={{top: -60, left: -60, position: "absolute"}}><CardBack/></div>
    </>
  );
}

export default Deck;