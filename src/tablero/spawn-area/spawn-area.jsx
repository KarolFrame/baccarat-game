import './spawn-area.css'
import { useEffect } from 'react';
import ChipButton from '../chip-button.jsx';

function SpawnArea(props){
  const tieSpawn = document.querySelector("#tie-spawn");
  const bankerSpawn = document.querySelector("#banker-spawn");
  const playerSpawn = document.querySelector("#player-spawn");
  const {id, lista, zonaSeleccionada} = props;
  //console.log(lista);

  useEffect(()=>{
    console.log(`Desde Spawn=> ${zonaSeleccionada}`);
  }, [zonaSeleccionada]);

  return (
    <>
      <div className="chip-spawn-area" id={id}>
        <div className='chip-relative-spawn'>
          {lista.map((chip)=>{
            if(zonaSeleccionada){
              if(zonaSeleccionada === "tieBtn"){
                tieSpawn.style.display = "visible";
                bankerSpawn.style.display = "none";
                playerSpawn.style.display = "none";
              }
              if(zonaSeleccionada === "bankerBtn"){
                tieSpawn.style.display = "none";
                bankerSpawn.style.display = "visible";
                playerSpawn.style.display = "none";
              }
              if(zonaSeleccionada === "playerBtn"){
                tieSpawn.style.display = "none";
                bankerSpawn.style.display = "none";
                playerSpawn.style.display = "visible";
              }
              return (
                  <ChipButton number={chip.value} styles={{borderColor: chip.borderColor, background: chip.backgroundColor}}/>
              )
            }
          })}
        </div>
      </div>
    </>
  )
}

export default SpawnArea