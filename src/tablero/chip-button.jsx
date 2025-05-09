import './chip-button.css'

function ChipButton(props){
  console.log(props)
  return(
    <>
      <div className="pokerchip" style={props.styles} onClick={props.manejoEvento}>
          <span>{props.number}</span>
      </div>
    </>
  )
}

export default ChipButton