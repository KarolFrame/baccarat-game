import "./tablero-main.css"
import CircleGameZone from "./semicirculo-tablero.jsx"
import BaccaratTable from "./BaccaratTable.jsx"
import { useEffect, useState } from "react"

function TableroMain(){
  const [estadoZona, setEstadoZona] = useState(null)
  
  useEffect(()=>{
    console.log(`Desde TableroMain => ${estadoZona}`);
  },[estadoZona])

  return (
    <>
    <div className="tablero_main">
      <CircleGameZone obtenerZonaSeleccionada={setEstadoZona} />
      <BaccaratTable zonaSeleccionada={estadoZona}/>
    </div>
    </>
  )
}

export default TableroMain
