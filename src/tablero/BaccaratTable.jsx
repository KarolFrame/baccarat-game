import { useEffect, useState } from 'react';
import ChipButton from './chip-button';
import './BaccaratTable.css';

function BaccaratTable({obtenerLista}) {
  const [wager, setWager] = useState(0);
  const [selectedChips, setSelectedChips] = useState([]);
  const [betHistory, setBetHistory] = useState([]);

  const chipButtonsInfo = [
    {key: "orangeBtn", value: 1, backgroundColor: "#f1c40f", borderColor: "#f39c12"},
    {key: "greenBtn", value: 5, backgroundColor: "green", borderColor: "green"},
    {key: "blueBtn", value: 10, backgroundColor: "lightblue", borderColor: "lightblue"},
    {key: "purpleBtn", value: 25, backgroundColor: "purple", borderColor: "purple"},
    {key: "redBtn", value: 100, backgroundColor: "red", borderColor: "red"}
  ];

  const addChip = (value) => {
    setBetHistory([...betHistory, value]);
    setWager(wager + value);
  };

  const undoBet = () => {
    if (betHistory.length > 0) {
      const last = betHistory[betHistory.length - 1];
      setBetHistory(betHistory.slice(0, -1));
      setWager(wager - last);
      setSelectedChips(selectedChips.slice(0, -1));
    }
  };

  const clearBet = () => {
    setBetHistory([]);
    setWager(0);
    setSelectedChips([]);
  };

  const capturarFichas = (event)=>{
    const infoChip = chipButtonsInfo.filter((chip) => parseInt(event.target.innerText) === chip.value)
    setSelectedChips([...selectedChips, infoChip[0]]);
    if(selectedChips.length > 3) {setSelectedChips(selectedChips.slice(0, -1))}
  }

  const handlerChipClick = (event)=>{
    addChip(parseInt(event.target.innerText));
    capturarFichas(event);
  }

  useEffect(()=>{
    console.log({wager, betHistory});
  }, [wager, betHistory]);

  useEffect(()=>{
    console.log(selectedChips);
    obtenerLista(selectedChips)
  }, [selectedChips, obtenerLista]);

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
        {chipButtonsInfo.map((chip)=>(
          <ChipButton key={chip.key} number={chip.value} styles={{borderColor: chip.borderColor, background: chip.backgroundColor}} manejoEvento={handlerChipClick}/>
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