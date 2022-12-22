import './Burger.css'

function Burger({ isOpen, handleClick }) {
  return (
    <button type="button" className={`burger-menu__button burger-menu__button_${isOpen  ? 'on' : 'off'}`} onClick={handleClick}>
      <span></span>
    </button >
  )
}

export default Burger
