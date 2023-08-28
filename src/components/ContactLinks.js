import * as React from "react"
import "/src/styles/components/contactlinks.scss"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

const ContactLinks = ({customClass=''}) => {
  return (
    <section className={"contact-links "+ customClass}>
      <h1>Masz Więcej Pytań?</h1>
      <article>

        <Link to="/kontakt">
          <header>Zamów Darmową Konsultację <FontAwesomeIcon icon={faUpRightFromSquare} /></header>
        </Link>
      </article>
      <article>

        <Link to="/faq">
          <header>Zobacz Często Zadawane Pytania <FontAwesomeIcon icon={faUpRightFromSquare} /></header>
        </Link>
      </article>
    </section>
  )
}

export default ContactLinks