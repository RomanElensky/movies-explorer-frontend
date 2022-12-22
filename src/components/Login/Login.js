import React, { useEffect, useState } from 'react'
import './Login.css';
import AuthForm from '../AuthForm/AuthForm'
import Logo from '../Logo/Logo'
import Input from '../Input/Input'

function Login({ onLogin, isRequestSend }) {
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);
  const isDisabled = !isFormValid || !isRequestSend;

  const handleChangePassword = (e) => {
    if (!e.target.value.length) {
      setErrorPassword('Заполните поле.')
    } else {
      setErrorPassword('')
    }
    setPassword(e.target.value)
  };

  const handleChangeEmail = (e) => {
    const validEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(
      e.target.value
    )
    if (!e.target.value.length) {
      setErrorEmail('Заполните поле.')
    } else if (!validEmail) {
      setErrorEmail('Неверный формат электронной почты.')
    } else {
      setErrorEmail('')
    }
    setEmail(e.target.value)
  };

  const handleInputDisabled = () => {
    setIsInputDisabled(!isInputDisabled)
  };

  const handleSubmitLoginForm = (e) => {
    e.preventDefault()
    onLogin({ email, password })
    handleInputDisabled()
  };

  useEffect(() => {
    if (!email || !password || errorPassword || errorEmail) {
      setIsFormValid(false)
    } else {
      setIsFormValid(true)
    }
  }, [email, errorEmail, errorPassword, password]);

  return (
    <section className="login">
      <Logo />
      <h1 className="login__title">Рады видеть!</h1>
      <AuthForm
        onSubmit={handleSubmitLoginForm}
        buttonText="Войти"
        linkCaption="Ещё не зарегистрированы?"
        linkText="Регистрация"
        linkPath="/signup"
        isDisabled={isDisabled}
      >
        <Input
          type="email"
          name="email"
          labelText="E-mail"
          placeholder="pochta@mail.ru"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          value={email || ''}
          onChange={handleChangeEmail}
          errorText={errorEmail}
          disabled={!isInputDisabled}
        />
        <Input
          type="password"
          name="password"
          labelText="Пароль"
          placeholder="********"
          value={password || ''}
          onChange={handleChangePassword}
          errorText={errorPassword}
          disabled={!isInputDisabled}
        />
      </AuthForm>
    </section>
  )
}

export default Login
