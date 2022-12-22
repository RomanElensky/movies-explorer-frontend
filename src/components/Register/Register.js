import React, { useEffect, useState } from 'react'
import './Register.css';
import AuthForm from '../AuthForm/AuthForm'
import Logo from "../Logo/Logo";
import Input from '../Input/Input'

function Register({ onRegister, isRequestSend }) {
  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);
  const isDisabled = !isFormValid || !isRequestSend;

  const handleChangeName = (e) => {
    if (!e.target.value.length) {
      setErrorName('Заполните поле.')
    } else if (e.target.value.length < 2) {
      setErrorName('Имя пользователя должно быть не менее 2 символов.')
    } else if (e.target.value.length > 30) {
      setErrorName('Имя пользователя должно быть не более 30 символов.')
    } else {
      setErrorName('')
    }
    setName(e.target.value)
  };

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
      setErrorEmail('Электронная почта должна быть заполнена.')
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

  const handleSubmitRegisterForm = (e) => {
    e.preventDefault()
    onRegister({ name, email, password })
    handleInputDisabled()
  };

  useEffect(() => {
    if (!name || !email || !password || errorName || errorPassword || errorEmail) {
      setIsFormValid(false)
    } else {
      setIsFormValid(true)
    }
  }, [errorName, errorEmail, errorPassword, name, email, password]);

  return (
    <section className="register">
      <Logo />
      <h1 className="register__title">Добро пожаловать!</h1>
      <AuthForm
        onSubmit={handleSubmitRegisterForm}
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        linkCaption="Уже зарегистрированы?"
        linkText="Войти"
        linkPath="/signin"
        isDisabled={isDisabled}
      >
        <Input
          type="text"
          name="name"
          labelText="имя"
          placeholder="Василий"
          value={name || ''}
          onChange={handleChangeName}
          minLength={2}
          maxLength={30}
          errorText={errorName}
          disabled={!isInputDisabled}
          required
        />
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
          labelText="password"
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

export default Register
