import "./tablero-main.css"
import CircleGameZone from "./semicirculo-tablero.jsx"
import BaccaratTable from "./BaccaratTable.jsx"
import SpawnArea from "./spawn-area/spawn-area.jsx"
import { useEffect, useState } from "react"

function TableroMain(){
  const [estadoZona, setEstadoZona] = useState(null)
  const [listaFichas, setListaFichas] = useState([])
  
  useEffect(()=>{
    console.log(`Desde TableroMain => ${estadoZona}`);
  },[estadoZona])

  return (
    <>
    <div className="tablero_main">
      <SpawnArea id="tie-spawn" lista={listaFichas} zonaSeleccionada={estadoZona}/>
      <SpawnArea id="banker-spawn" lista={listaFichas} zonaSeleccionada={estadoZona}/>
      <SpawnArea id="player-spawn" lista={listaFichas} zonaSeleccionada={estadoZona}/>
      <CircleGameZone obtenerZonaSeleccionada={setEstadoZona} />
      <BaccaratTable obtenerLista={setListaFichas}/>
    </div>
    </>
  )
}

export default TableroMain
