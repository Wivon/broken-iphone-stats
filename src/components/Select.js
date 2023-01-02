import React, { useState } from 'react'

export default function Select({title, options, registerModel, active, setCurrentFormStep, renderActiveBall}) {
  let [currentValue, setCurrentValue] = useState('iPhone X')

  function handleChange(e) {
    let value = e.target.value
    setCurrentValue(value)
    registerModel(value)
    setCurrentFormStep(active + 1)
    renderActiveBall()
  }

  return (
    <div className={"select-container form-input" + (active === 0 ? ' active' : '')}>
        <label htmlFor="model">{title}</label>
        <select onChange={handleChange} id="model" name="model" defaultValue={currentValue}>
            {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
    </div>
  )
}
