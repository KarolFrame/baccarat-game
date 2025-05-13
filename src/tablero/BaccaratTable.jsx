import { useEffect, useState } from 'react';
import ChipButton from './chip-button';
import './BaccaratTable.css';
import StartButton from './start-button';

function BaccaratTable({ onStart, buttonDisabled, obtenerLista }) {
  const [wager, setWager] = useState(0);
  const [balance, setBalance] = useState(1000); 
  const [selectedChips, setSelectedChips] = useState([]);
  const [betHistory, setBetHistory] = useState([]);

  const chipButtonsInfo = [
    { key: "orangeBtn", value: 1, backgroundColor: "#f1c40f", borderColor: "#f39c12" },
    { key: "greenBtn", value: 5, backgroundColor: "green", borderColor: "darkgreen" },
    { key: "blueBtn", value: 10, backgroundColor: "blue", borderColor: "darkblue" },
    { key: "purpleBtn", value: 25, backgroundColor: "purple", borderColor: "purple" },
    { key: "redBtn", value: 100, backgroundColor: "red", borderColor: "darkred" }
  ];

  const addChip = (value) => {
    if (balance >= value) {
      setBetHistory([...betHistory, value]);
      setWager(wager + value);
      setBalance(balance - value);
    } else {
      alert("Not enough balance!");
    }
  };

  const undoBet = () => {
    if (betHistory.length > 0) {
      const last = betHistory[betHistory.length - 1];
      setBetHistory(betHistory.slice(0, -1));
      setWager(wager - last);
      setSelectedChips(selectedChips.slice(0, -1));
      setBalance(balance + last); 
    }
  };

  const clearBet = () => {
    setBalance(balance + wager); 
    setBetHistory([]);
    setWager(0);
    setSelectedChips([]);
  };

  const capturarFichas = (event) => {
    const infoChip = chipButtonsInfo.filter((chip) => parseInt(event.target.innerText) === chip.value);
    setSelectedChips([infoChip[0], ...selectedChips]);
    if (selectedChips.length > 3) {
      setSelectedChips(selectedChips.slice(0, -1));
    }
  };

  const handlerChipClick = (event) => {
    addChip(parseInt(event.target.innerText));
    capturarFichas(event);
  };

  useEffect(() => {
    obtenerLista(selectedChips);
  }, [selectedChips, obtenerLista]);

  return (
    <div className="game-container">
      <div className="wager-section">
        <div className="wager-header">
          <span className="wager-left">Balance</span>
          <span className="wager-right">${balance.toFixed(2)}</span>
        </div>
        <input
          className="wager-input"
          type="number"
          value={balance}
          disabled
        />
      </div>

      <div className="chip-buttons">
        {chipButtonsInfo.map((chip) => (
          <ChipButton
            key={chip.key}
            number={chip.value}
            styles={{ borderColor: chip.borderColor, background: chip.backgroundColor }}
            manejoEvento={handlerChipClick}
          />
        ))}
      </div>

      <div className="action-buttons">
        <StartButton onClick={onStart} buttonDisabled={buttonDisabled} />
        <div className="undo-clear-buttons">
          <button onClick={undoBet} className="undo-button">Undo bet</button>
          <button onClick={clearBet} className="clear-button">Clear</button>
        </div>
      </div>
    </div>
  );
}

export default BaccaratTable;
