import React from 'react'
import { Link } from 'react-router-dom'
import './AuthForm.css'

function AuthForm({ title, children, buttonText, linkCaption, linkText, linkPath, onSubmit, isDisabled }) {
  return (
    <div className="auth">
      <form className="auth-form" onSubmit={onSubmit} noValidate>
        <fieldset className="auth-form__fieldset">{children}</fieldset>
        <div className="auth-form__button-container">
          <button disabled={isDisabled} className="auth-form__button">{buttonText}</button>
          <p className="auth-form__link-text">{linkCaption}
            <Link className="auth-form__link" to={linkPath}>{linkText}</Link></p>
        </div>
      </form>
    </div>
  )
}

export default AuthForm
