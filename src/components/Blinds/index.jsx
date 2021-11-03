import React, {useState} from 'react';
import './style.css';
import blindsOpen from './img/blinds-open.svg'
import blindsClosed from './img/blinds-closed.svg'

const Blinds = ({ state }) => {

  const [stateBlinds, setStateBlinds] = useState(state)

  const openState = () => {
    setStateBlinds(stateBlinds)
  }

  const closedState = () => {
    setStateBlinds(!stateBlinds)
  }

  return (
    <div className = "blinds">
      <div className = "blinds__icon">
        <img src={stateBlinds ? blindsOpen : blindsClosed} alt={stateBlinds ? 'zaluzie otevrene' : 'zaluzie zavrene'} />
      </div>

      <div className = "blinds__name">Žaluzie
      </div>

      <div className = "blinds__controls">
        
        <button className = { stateBlinds ? "button button--active" : "button"} onClick = {openState}> Otevřeno </button>

        <button className = { stateBlinds ? "button" : "button button--active"} onClick = {closedState}> Zavřeno </button>


      </div>

    </div>
  )

}

export default Blinds;