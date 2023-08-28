import * as React from "react"
import "/src/styles/components/footer.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquarePhone, faLocationDot} from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
const Footer = () => {
  return (
    <footer className="footer">
      <h2>VIZPROM</h2>
      <div className="footer__content">
        <div className="footer__content__wrap">
          <div className="footer__content__wrap__title">Informacje Kontaktowe</div>
          <div className="footer__content__wrap__info"><FontAwesomeIcon icon={faLocationDot}/> Katowice, Śląskie 40-002, Polska</div>
          <a href="mailto:kontakt@vizprom.pl" className="footer__content__wrap__info"><FontAwesomeIcon icon={faEnvelope}/> kontakt@vizprom.pl</a>
          <div className="footer__content__wrap__info"><FontAwesomeIcon icon={faSquarePhone}/> +48 600 673 782</div>
        </div>
        <div className="footer__content__wrap">
          <div className="footer__content__wrap__title">Odkrywaj</div>
          <Link to="/" className="footer__content__wrap__info">STRONA GŁÓWNA</Link>
          <Link to="/onas" className="footer__content__wrap__info">O NAS</Link>
          <Link to="/kontakt" className="footer__content__wrap__info">KONTAKT</Link>
          <Link to="/faq" className="footer__content__wrap__info">FAQ</Link>
        </div>
        <div className="footer__content__wrap footer__content__wrap--copy">
          <StaticImage src="../images/icon.png" width={60} layout="fixed" alt="logo" className="footer__image"/>
          <div className="footer__content__wrap__info">2023 © Vizprom</div>
          <a href="https://vizprom.pl/polityka.docx" target="blank" className="footer__content__wrap__info">Polityka Prywatności</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer