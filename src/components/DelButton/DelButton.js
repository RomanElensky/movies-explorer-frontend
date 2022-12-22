import './DelButton.css'

function DelButton({ onClick }) {
  return (
    <button className="movies-card__delete-button" type="button" onClick={onClick}></button>
  )
}

export default DelButton