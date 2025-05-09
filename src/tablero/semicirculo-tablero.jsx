import './semicirculo-tablero.css'
import './letreros-tablero.css'
import Card from './card'
import Deck from './deck.jsx'
import { useState } from 'react'

function CircleGameZone(){
  const [zona, seleccionarZona] = useState();

  const _paintZone = (event)=>{
    const tieZone = document.querySelector(".tie-section")
    const bankerZone = document.querySelector(".banker-section")
    const playerZone = document.querySelector(".player-section")

    tieZone.classList.remove("activateGameZone")
    bankerZone.classList.remove("activateGameZone")
    playerZone.classList.remove("activateGameZone")

    event.target.classList.add("activateGameZone")
  }
  
  const handlerGameZoneClick = (event)=>{
    _paintZone(event);
    

  }

  return (
    <>
    <div className='contenedor-principal'>
      {/*LETREROS*/}
      <div className='banker-zone'>
        <div className='cards-container'>
          <div><Card number="A" suit="hearts"/></div>
          <div style={{top: 10, left: 30, position: "absolute"}}><Card number="K" suit="clubs" /></div>
        </div>
        <p>Banker</p>
        <div className='bet-box'>0</div>
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
          <Card number="10" suit="spades"/>
          <div style={{top: 10, left: 30, position: "absolute"}}><Card number="7" suit="diamonds"/></div>
        </div>
        <p>Player</p>
        <div className='bet-box'>
          0
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
            <div className='tie-section' onClick={handlerGameZoneClick}></div>
            <div className='banker-section' onClick={handlerGameZoneClick}></div>
            <div className='player-section' onClick={handlerGameZoneClick}></div>
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