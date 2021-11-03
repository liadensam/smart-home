import React, { useState } from 'react';
import './style.css';
import lightOn from './img/light-on.svg'
import lightOff from './img/light-off.svg'

const Light = ({ name, state }) => {
  const [turnOn, setTurnOn] = useState(state)

  const lightSwitch = () => {
    setTurnOn(!turnOn)
  }
  
  return (
    <div className = "light" onClick = {lightSwitch}>
        <div className = "light__icon">
          <img src={turnOn ? lightOn : lightOff} alt={turnOn ? 'Zapnutá žárovka' : 'Vypnutá žárovka'} />
          <div className = "light__name"> {name} </div>
        </div>
    </div>
  )
  
}

export default Light;