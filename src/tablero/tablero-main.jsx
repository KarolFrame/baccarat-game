import "./tablero-main.css"
import CircleGameZone from "./semicirculo-tablero.jsx"
import BaccaratTable from "./BaccaratTable.jsx"
import SpawnArea from "./spawn-area/spawn-area.jsx"

function TableroMain(){

  return (
    <>
    <div className="tablero_main">
      <SpawnArea id="tie-spawn"/>
      <SpawnArea id="banker-spawn"/>
      <SpawnArea id="player-spawn"/>
      <CircleGameZone />
      <BaccaratTable/>
    </div>
    </>
  )
}

export default TableroMain
