import './Portfolio.css'

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__container">
        <li className="portfolio__list-item">
          <a href='https://github.com/RomanElensky/how-to-learn' className="portfolio__link" target="_blank" rel="noopener noreferrer">Статичный сайт<span>↗</span></a>
        </li>
        <li className="portfolio__list-item">
          <a href='https://github.com/RomanElensky/russian-travel' className="portfolio__link" target="_blank" rel="noopener noreferrer">Адаптивный сайт<span>↗</span></a>
        </li>
        <li className="portfolio__list-item">
          <a href='https://github.com/RomanElensky/react-mesto-api-full' className="portfolio__link" target="_blank" rel="noopener noreferrer">Одностраничное приложение<span>↗</span></a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
