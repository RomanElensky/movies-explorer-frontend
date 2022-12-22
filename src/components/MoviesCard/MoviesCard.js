import React from 'react'
import { useLocation, matchPath } from 'react-router'
import './MoviesCard.css'
import MarkButton from '../MarkButton/MarkButton'
import DelButton from '../DelButton/DelButton'
import { getTimeFromMin } from '../../utils/utils'

function MoviesCard({ moviesCard, moviesCardList, onSave, onDelete }) {
  const isSaved = moviesCard.id && moviesCardList.some((m) => m.movieId === moviesCard.id);
  const location = useLocation();

  const handleClickMovie = () => {
    if (isSaved) {
      onDelete(
        moviesCardList.filter((m) => m.movieId === moviesCard.id)[0]
      )
    } else {
      onSave(moviesCard)
    }
  };

  const handleDeleteClick = () => {
    onDelete(moviesCard)
  };

  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__container-info">
          <h2 className="movies-card__title">{moviesCard.nameRU}</h2>
          <p className="movies-card__duration">{getTimeFromMin(moviesCard.duration)}</p>
        </div>
        {matchPath({ path: '/movies' }, location.pathname) && (
          <MarkButton isSavedMovie={isSaved} onClick={handleClickMovie} />
        )}
        {matchPath({ path: '/saved-movies' }, location.pathname) && (
          <DelButton onClick={handleDeleteClick} />
        )}
      </div>
      <a className="movies-card__link" href={moviesCard.trailerLink} target="_blank" rel="noreferrer">
        <img className="movies-card__image" src={moviesCard.image} alt={`Обложка фильма ${moviesCard.nameRu}`} />
      </a>
    </li>
  )
}

export default MoviesCard
