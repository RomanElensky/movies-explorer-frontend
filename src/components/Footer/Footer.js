import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__copyright">©2022</p>
        <ul className="footer__links">
          <li> <a href='https://practicum.yandex.ru/' className="footer__link" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a></li>
          <li> <a href='https://github.com/RomanElensky?tab=repositories' className="footer__link" target="_blank" rel="noopener noreferrer">Github</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
