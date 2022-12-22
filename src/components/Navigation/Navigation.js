import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <nav className="navigation">
      <React.Fragment>
        <NavLink className={({ isActive }) => isActive ? 'navigation__link_active' : 'navigation__link'} to="/movies">Фильмы</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'navigation__link_active' : 'navigation__link'} to="/saved-movies">Сохраненные фильмы</NavLink>
      </React.Fragment>
    </nav>
  )
}

export default Navigation
