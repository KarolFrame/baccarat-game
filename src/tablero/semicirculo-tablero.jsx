import './semicirculo-tablero.css'
import './letreros-tablero.css'
import Card from './card'
import Deck from './deck.jsx'
import PlayerDeck from './playerDeck.jsx'
import { useState } from 'react'

function CircleGameZone({ cards, textBanker, textPlayer}){

  return (
    <>
    <div className='contenedor-principal'>
      {/*LETREROS*/}
      <div className='banker-zone'>
        <div className='cards-container'>
          <PlayerDeck forwardCard={cards[0]} topCard={cards[1]}/>
        </div>
        <p>Banker</p>
        <div className='bet-box'>
          {textBanker}
        </div>
      </div>
      
      <div className='bet-tie'>
        <p>Tie</p>
        <p className='tie-secondary-text'>Pays 8 to 1</p>
      </div>
      <div className='bet-banker'>
        <p>Banker</p>
      </div>
      <div className='bet-player'>
        <p>Player</p>
      </div>

      <div className='player-zone'>
        <div className='cards-container'>
          <PlayerDeck forwardCard={cards[2]} topCard={cards[3]}/>
        </div>
        <p>Player</p>
        <div className='bet-box'>
          {textPlayer}
        </div>
      </div>

      {/*TABLERO SEMICIRCULAR*/}
      <div className='circle5'>
      <div className='cardsBack-container'>
        <Deck/>
      </div>

      </div>
      <ul className="circle">
        <li className='p1'><div className="text"></div></li>
        <li className='p2'><div className="text"></div></li>
        <li className='p3'><div className="text"></div></li>
        <li className='p4'>
          <div className="text">
            <div className='tie-section'></div>
            <div className='banker-section'></div>
            <div className='player-section'></div>
          </div>
        </li>
        <li className='p5'><div className="text"></div></li>
        <li className='p6'><div className="text"></div></li>
      </ul>
      <div className='circle2'>
        <div className='circle3'></div>
        <div className='circle4'></div>
      </div>
    </div>
    </>
  )
}

export default CircleGameZone