import { useState } from 'react';
import ChipButton from './chip-button';
import './BaccaratTable.css';

function BaccaratTable() {
  const [wager, setWager] = useState(0);
  //const [selectedChip, setSelectedChip] = useState(null);
  const [betHistory, setBetHistory] = useState([]);

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
        <ChipButton number="1" styles={{borderColor: "#f39c12", background: "#f1c40f"}} manejoEvento={()=>{addChip(1)}}/>
        <ChipButton number="5" styles={{borderColor: "green", background: "green"}} manejoEvento={()=>{addChip(5)}}/>
        <ChipButton number="10" styles={{borderColor: "lightblue", background: "lightblue"}} manejoEvento={()=>{addChip(10)}}/>
        <ChipButton number="25" styles={{borderColor: "purple", background: "purple"}} manejoEvento={()=>{addChip(25)}}/>
        <ChipButton number="100" styles={{borderColor: "red", background: "red"}} manejoEvento={()=>{addChip(100)}}/>
      </div>

      <div className="action-buttons">
        <button className="start-button">Start Game</button>
        <div className="undo-clear-buttons">
          <button onClick={undoBet} className="undo-button">Undo bet</button>
          <button onClick={clearBet} className="clear-button">Clear</button>
        </div>
      </div>
    </div>
  );
}
export default BaccaratTable;