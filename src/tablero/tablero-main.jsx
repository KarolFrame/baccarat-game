import "./tablero-main.css"
import CircleGameZone from "./semicirculo-tablero.jsx"
import BaccaratTable from "./BaccaratTable.jsx"
import { useState } from "react"

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

  return (
    <>
    <div className="tablero_main">
      <CircleGameZone cards={cards} textBanker={textBanker} textPlayer={textPlayer}/>
      <BaccaratTable onStart={startGame} buttonDisabled={buttonDisabled}/>
    </div>
    </>
  )
}

export default TableroMain
