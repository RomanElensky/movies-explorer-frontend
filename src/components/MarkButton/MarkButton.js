import React from 'react'
import './MarkButton.css'

function MarkButton({ onClick, isSavedMovie }) {
  return (
    <button className={!isSavedMovie ? 'movies-card__mark-button' : 'movies-card__mark-button movies-card__mark-button_marked'} type="button" onClick={onClick}></button>
  )
}

export default MarkButton