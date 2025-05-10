import './chip-button.css'

function StartButton({onClick, buttonDisabled}){
  return(
    <>
    <button onClick={onClick} className="start-button" disabled={buttonDisabled}>Start Game</button>
    </>
  )
}

export default StartButton