import { useEffect, useState } from 'react';
import ChipButton from './chip-button';
import './BaccaratTable.css';
import SpawnArea from './spawn-area/spawn-area';

function BaccaratTable({zonaSeleccionada}) {
  const [wager, setWager] = useState(0);
  //const [selectedChip, setSelectedChip] = useState(null);
  const [betHistory, setBetHistory] = useState([]);

  const chipButtonsInfo = {
    orangeChip: {
      value: 1,
      backgroundColor: "#f1c40f",
      borderColor: "#f39c12"
    },
    greenChip: {
      value: 5,
      backgroundColor: "green",
      borderColor: "green"
    },
    blueChip: {
      value: 10,
      backgroundColor: "lightblue",
      borderColor: "lightblue"
    },
    purpleChip: {
      value: 25,
      backgroundColor: "purple",
      borderColor: "purple"
    },
    redChip: {
      value: 100,
      backgroundColor: "red",
      borderColor: "red"
    }
  }

  const addChip = (value) => {
    setBetHistory([...betHistory, value]);
    setWager(wager + value);
  };

  const undoBet = () => {
    if (betHistory.length > 0) {
      const last = betHistory[betHistory.length - 1];
      setBetHistory(betHistory.slice(0, -1));
      setWager(wager - last);
    }
  };

  const clearBet = () => {
    setBetHistory([]);
    setWager(0);
  };

  const handlerChipClick = (event)=>{
    console.log(event);
    addChip(parseInt(event.target.innerText));
  }

  useEffect(()=>{
    console.log({wager, betHistory});
  }, [wager, betHistory]);

  useEffect(()=>{
    console.log(`Desde BaccaratTable => ${zonaSeleccionada}`);
  }, [zonaSeleccionada])

  return (
    <div className="game-container">
      <div className="wager-section">
        <div className="wager-header">
          <span className="wager-left">Wager</span>
          <span className="wager-right">${wager.toFixed(2)}</span>
        </div>
        <input
          className="wager-input"
          type="number"
          value={wager}
          onChange={(e) => setWager(Number(e.target.value))}
          placeholder="Enter wager"
        />
      </div>

      <div className="chip-buttons">
        {Object.entries(chipButtonsInfo).map(([key, prop])=>(
          <ChipButton key={key} number={prop.value} styles={{borderColor: prop.borderColor, background:prop.backgroundColor}} manejoEvento={handlerChipClick}/>
        ))}
      </div>

      <div className="action-buttons">
        <button className="start-button">Start Game</button>
        <div className="undo-clear-buttons">
          <button onClick={undoBet} className="undo-button">Undo bet</button>
          <button onClick={clearBet} className="clear-button">Clear</button>
        </div>
      </div>
      <SpawnArea id="tie-spawn"/>
      <SpawnArea id="banker-spawn"/>
      <SpawnArea id="player-spawn"/>
    </div>
  );
}
export default BaccaratTable;