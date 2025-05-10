import './spawn-area.css'
import { useEffect } from 'react';
import ChipButton from '../chip-button.jsx';

function SpawnArea(props){
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
              return (
                  <ChipButton styles={{borderColor: chip.borderColor, background: chip.backgroundColor}}/>
              )
            }
          })}
        </div>
      </div>
    </>
  )
}

export default SpawnArea