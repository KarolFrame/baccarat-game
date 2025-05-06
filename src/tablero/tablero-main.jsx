import "./tablero-main.css"
import Semicirculo from "./semicirculo-tablero"
import Letreros from './letreros-tablero'

function TableroMain(){

  return (
    <>
    <div className="tablero_main">
      <Letreros />
      <Semicirculo />
    </div>
    </>
  )
}

export default TableroMain