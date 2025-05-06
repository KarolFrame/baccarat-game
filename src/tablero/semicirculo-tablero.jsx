import './semicirculo-tablero.css'

function Semicirculo(){
  return (
    <>
    <div className='contenedor-principal'>
      <div className='circle5'></div>
      <ul className="circle">
        <li className='p1'><div className="text"></div></li>
        <li className='p2'><div className="text"></div></li>
        <li className='p3'><div className="text"></div></li>
        <li className='p4'>
          <div className="text">
            <div className='tie-section'></div>
            <div className='banker-section'></div>
            <div className='player-section'></div>
          </div>
        </li>
        <li className='p5'><div className="text"></div></li>
        <li className='p6'><div className="text"></div></li>
      </ul>
      <div className='circle2'>
        <div className='circle3'></div>
        <div className='circle4'></div>
      </div>
    </div>
    </>
  )
}

export default Semicirculo