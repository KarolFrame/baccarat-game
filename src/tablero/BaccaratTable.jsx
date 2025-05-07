import React, { useState } from 'react';
import './BaccaratTable.css';

function BaccaratTable() {
  const chipValues = [1, 5, 10, 25, 100];
  const [wager, setWager] = useState(0);
  const [selectedChip, setSelectedChip] = useState(null);
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

  const getChipColorClass = (val) => {
    switch (val) {
      case 1:
        return 'orange';
      case 5:
        return 'green';
      case 10:
        return 'blue';
      case 25:
        return 'purple';
      case 100:
        return 'red';
      default:
        return '';
    }
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
        {chipValues.map((val) => (
          <div
            key={val}
            onClick={() => addChip(val)}
            className={`pokerchip ${getChipColorClass(val)}`}
            data-value={val}
          >
            <span>{val}</span>
          </div>
        ))}
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