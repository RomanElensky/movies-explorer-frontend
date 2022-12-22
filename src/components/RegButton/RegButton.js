import { Link } from 'react-router-dom'
import './RegButton.css'
import Button from '../Button/Button'

function RegButton() {
  return (
    <Link className="reg-button__link" to="/signup">
      <Button buttonText="Регистрация" />
    </Link>
  )
}

export default RegButton