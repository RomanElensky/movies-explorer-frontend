import './Input.css'

function Input({ name, type, value, placeholder, minLength, maxLength, labelText, errorText, isValidInput, onChange }) {
  return (
    <label className="auth-form__label">
      {labelText}
      <input className={isValidInput ? 'auth-form__input' : 'auth-form__input auth-form__input_errored'}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        required
      />
      <span className={isValidInput ? 'auth-form__span' : 'auth-form__span auth-form__span_active'}>
        {errorText}
      </span>
    </label>
  )
}

export default Input
