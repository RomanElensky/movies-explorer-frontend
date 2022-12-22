import React, { useState } from "react"
import "./ActiveButton.css"

function ActiveButton() {
  const [isMarked, setIsMarked] = useState(false)

  function handleMarkMovie() {
    setIsMarked(!isMarked)
  }

  return (
    <button
      type="button"
      className={
        !isMarked
          ? "movies-card__active-button"
          : "movies-card__active-button movies-card__active-button_marked"
      }
      onClick={handleMarkMovie}
    ></button>
  )
}

export default ActiveButton