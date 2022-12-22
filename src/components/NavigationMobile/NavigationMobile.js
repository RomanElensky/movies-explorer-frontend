import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './NavigationMobile.css'
import ProfileButton from '../ProfileButton/ProfileButton'

function NavigationMobile({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return
    const closeByEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', closeByEscape)
    return () => document.removeEventListener('keydown', closeByEscape)
  }, [isOpen, onClose]);

  return (
    <section className='navigation-mobile'>
      <div className={isOpen ? 'burger-menu burger-menu_opened' : 'burger-menu burger-menu_closed'}>
        <nav className="navigation-mobile__container">
          <React.Fragment>
            <NavLink className={({ isActive }) => isActive ? 'burger-menu-nav__link_active' : 'burger-menu-nav__link '} to="/" exact="true" onClick={onClose}>
              Главная
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? 'burger-menu-nav__link_active' : 'burger-menu-nav__link'} to="/movies" exact="true" onClick={onClose}>
              Фильмы
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? 'burger-menu-nav__link_active' : 'burger-menu-nav__link'} to="/saved-movies" exact="true" onClick={onClose}>
              Сохраненные фильмы
            </NavLink>
          </React.Fragment>
        </nav>
        <ProfileButton onClose={onClose} />
      </div>
    </section>
  )
}

export default NavigationMobile
