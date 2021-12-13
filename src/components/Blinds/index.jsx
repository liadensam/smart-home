import React, {useState} from 'react';
import './style.css';
import blindsOpen from './img/blinds-open.svg'
import blindsClosed from './img/blinds-closed.svg'

const Blinds = ({ state }) => {

  const [stateBlinds, setStateBlinds] = useState(state)

  const openState = () => {
    setStateBlinds("open")
  }

  const closedState = () => {
    setStateBlinds("close")
  }

  return (
    <div className = "blinds">
      <div className = "blinds__icon">
        <img src={stateBlinds === "open" ? blindsOpen : blindsClosed} alt={stateBlinds ? 'blinds open' : 'blinds closed'} />
      </div>

      <div className = "blinds__name">Blinds
      </div>

      <div className = "blinds__controls">
        
        <button className = { stateBlinds === "open" ? "button button--active" : "button"} onClick = {openState}> Open </button>

        <button className = { stateBlinds === "open" ? "button" : "button button--active"} onClick = {closedState}> Closed</button>


      </div>

    </div>
  )

}

export default Blinds;


//solution with boolean

// const Blinds = ({ state }) => {

//   const [stateBlinds, setStateBlinds] = useState(state === "open")

//   const changeBlindState = () => {
//     setStateBlinds(!stateBlinds)
//   }

//   return (
//     <div className = "blinds">
//       <div className = "blinds__icon">
//         <img src={stateBlinds ? blindsOpen : blindsClosed} alt={stateBlinds ? 'zaluzie otevrene' : 'zaluzie zavrene'} />
//       </div>

//       <div className = "blinds__name">Žaluzie
//       </div>

//       <div className = "blinds__controls">
        
//         <button className = { stateBlinds ? "button button--active" : "button"} onClick = {openState}> Otevřeno </button>

//         <button className = { stateBlinds ? "button" : "button button--active"} onClick = {closedState}> Zavřeno </button>


//       </div>

//     </div>
//   )
