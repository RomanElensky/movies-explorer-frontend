import React, { useState, useEffect } from 'react'
import './SearchForm.css'
import icon from '../../images/search.svg'


function SearchForm({ onSearchMovies, savedMoviesRoute }) {
  const [keyWord, setKeyWord] = useState('')
  const [checkBoxStatus, setCheckBoxStatus] = useState(false)

  const [error, setError] = useState(false)

  useEffect(() => {
    if (!savedMoviesRoute) {
      const query = localStorage.getItem('keyWord')

      if (query) {
        setKeyWord(query)
      }
    }
  }, [savedMoviesRoute])

  useEffect(() => {
    if (!savedMoviesRoute) {
      const status = localStorage.getItem('checkBoxStatus')

      if (JSON.parse(status) === true) {
        setCheckBoxStatus(true)
      } else {
        setCheckBoxStatus(false)
      }
    }
  }, [savedMoviesRoute])

  const handleSubmitSearchForm = (e) => {
    e.preventDefault()
    if (!keyWord) {
      setError(true)
    } else {
      setError(false)
      onSearchMovies(keyWord, checkBoxStatus)
    }
  }

  const handleSearchInputChange = (e) => {
    setKeyWord(e.target.value)
    setError(false)
  }

  const handleCheckBoxChange = (e) => {
    setCheckBoxStatus(e.target.checked)
    onSearchMovies(keyWord, e.target.checked)
  }

  return (
    <div className="search">
      <form className="seacrh__form" onSubmit={handleSubmitSearchForm} noValidate>
        <div className="seacrh__conteiner">
        <img className="search__image" src={icon} alt="icon"/>
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
            value={keyWord || ''}
            onChange={handleSearchInputChange}
            required
          />
          <button className="search__button" type="submit"></button>
          <div className="search__line"></div>
          <span className="search__error">{error ? ' Нужно ввести ключевое слово' : ''}</span>
        </div>
        <div className="checkbox">
          <label className="checkbox__container">
            <input className="checkbox__input"
              type="checkbox"
              checked={checkBoxStatus}
              onChange={handleCheckBoxChange} />
          </label>
          <span className="checkbox__text">Короткометражки</span>
        </div>
      </form>
    </div>
  )
}


export default SearchForm
