import './AboutMe.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import Portfolio from '../Portfolio/Portfolio'
import Avatar from '../../images/Screenshot_2.png'

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <SectionTitle title="Студент" />
      <div className="about-me__container">
        <div className="about-me__info">
          <div className="about-me__resume">
            <h3 className="about-me__name">Анастасия</h3>
            <p className="about-me__subtitle">Фронтенд-разработчик, 24 года</p>
            <p className="about-me__text">Родилась и живу в Москве. Недавно начала кодить. С 2020 года работаю в компании "Тардикрейд". После того, как прошла курс по веб-разработке, перешла на другю должность.</p>
          </div>
          <a href='https://github.com/RomanElensky' className="about-me__link" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        <img src={Avatar} alt="Pic" className="about-me__image" />
      </div>
      <Portfolio />
    </section>
  )
}


export default AboutMe
