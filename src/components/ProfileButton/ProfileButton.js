import React from "react";
import { NavLink } from "react-router-dom";
import './ProfileButton.css';

function Navigation({ onClose }) {
  return (
    <div className="profile-button">
      <NavLink to="/profile" className="profile-button__link" onClick={onClose}>Аккаунт</NavLink>
    </div>
  )
}

export default Navigation;


