import "./tablero-main.css"
import CircleGameZone from "./semicirculo-tablero.jsx"
import BaccaratTable from "./BaccaratTable.jsx"
import SpawnArea from "./spawn-area/spawn-area.jsx"
import { useEffect, useState } from "react"

const _random = (max) =>{
  return Math.floor(Math.random() * max);
}

const _getRandomSuit = () =>{
  const suits = ["hearts", "diamonds", "clubs", "spades"];
  return suits[_random(suits.length)];
}

const _getRandomNumber = () =>{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  return numbers[_random(numbers.length)];
}

function TableroMain(){
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [cards, setCards] = useState([
    { number: null, suit: null, hidden: true },
    { number: null, suit: null, hidden: true },
    { number: null, suit: null, hidden: true },
    { number: null, suit: null, hidden: true },
  ]);
  const [textBanker, setTextBanker] = useState(0);
  const [textPlayer, setTextPlayer] = useState(0);

  const _getValueCard = (newCards, index) =>{
    if(newCards[index].number == "J" || newCards[index].number == "Q" || newCards[index].number =="K" || newCards[index].number == 10){
      return 0;
    }
    return newCards[index].number;
  }

    const _finalValue = (newCards, fCard, tCard) =>{
    const sum = _getValueCard(newCards, fCard) + _getValueCard(newCards, tCard);
    return sum % 10;
  }

  const startGame = () => {
    const newCards = cards.map(() => ({
      number: _getRandomNumber(),
      suit: _getRandomSuit(),
      hidden: false,
    }));
  setCards(newCards);

  setTextBanker(_finalValue(newCards, 0, 1));
  setTextPlayer(_finalValue(newCards, 2, 3));
  setButtonDisabled(true);
};
  const [estadoZona, setEstadoZona] = useState(null)
  const [listaFichas, setListaFichas] = useState([])
  
  const tieSpawn = document.querySelector("#tie-spawn");
  const bankerSpawn = document.querySelector("#banker-spawn");
  const playerSpawn = document.querySelector("#player-spawn");

  useEffect(()=>{
    console.log(`Desde TableroMain => ${estadoZona}`);
    if(estadoZona === "tieBtn"){
      tieSpawn.style.display = "block";
      bankerSpawn.style.display = "none";
      playerSpawn.style.display = "none";
    }
    if(estadoZona === "bankerBtn"){
      tieSpawn.style.display = "none";
      bankerSpawn.style.display = "block";
      playerSpawn.style.display = "none";
    }
    if(estadoZona === "playerBtn"){
      tieSpawn.style.display = "none";
      bankerSpawn.style.display = "none";
      playerSpawn.style.display = "block";
    }
  },[estadoZona, tieSpawn, bankerSpawn, playerSpawn])

  return (
    <>
    <div className="tablero_main">
      <SpawnArea id="tie-spawn" lista={listaFichas} zonaSeleccionada={estadoZona}/>
      <SpawnArea id="banker-spawn" lista={listaFichas} zonaSeleccionada={estadoZona}/>
      <SpawnArea id="player-spawn" lista={listaFichas} zonaSeleccionada={estadoZona}/>
      <CircleGameZone cards={cards} textBanker={textBanker} textPlayer={textPlayer} obtenerZonaSeleccionada={setEstadoZona} />
      <BaccaratTable onStart={startGame} buttonDisabled={buttonDisabled} obtenerLista={setListaFichas}/>
    </div>
    </>
  )
}

export default TableroMain
