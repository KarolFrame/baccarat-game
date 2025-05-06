import './letreros-tablero.css'

function Letreros(){

  return (
    <>
    <div className='banker-zone'>
      <p>Banker</p>
      <div className='bet-box'>0</div>
    </div>
    
    <div className='bet-tie'>
      <p>Tie</p>
    </div>
    <div className='bet-banker'>
      <p>Banker</p>
    </div>
    <div className='bet-player'>
      <p>Player</p>
    </div>

    <div className='player-zone'>
      <p>Player</p>
      <div className='bet-box'>
        0
      </div>
    </div>
    </>
  )
}

export default Letreros