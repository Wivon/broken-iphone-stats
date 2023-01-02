import React from 'react'

export default function ActionButton({text, handleActionBtnClick}) {
  return (
    <button onClick={handleActionBtnClick} className="actionBtn">{text}</button>
  )
}
