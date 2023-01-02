import React, { useState } from 'react'

export default function Part({data, text, registerBrokenPart}) {
  let [selected, setSelected] = useState(false)

  function handleClick() {
    selected ? setSelected(false) : setSelected(true)
    registerBrokenPart(data, selected)
  }

  return (
    <p onClick={handleClick} className={selected ? 'active' : null} data-id={data}>{text}</p>
  )
}
