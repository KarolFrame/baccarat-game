import "./tablero-main.css"
import CircleGameZone from "./semicirculo-tablero.jsx"
import Card from "./card.jsx"
import BaccaratTable from "./BaccaratTable.jsx"


function TableroMain(){

  return (
    <>
    <div className="tablero_main">
      <CircleGameZone />
      <BaccaratTable />
    </div>
    </>
  )
}

export default TableroMain
