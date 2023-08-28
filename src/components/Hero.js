import * as React from "react"
import "../styles/components/hero.scss"
import Button from "./Button"

const Hero = () => {
  return (
    <section className="hero">
      <header>PROSTY I SKUTECZNY MARKETING</header>
      <p>
        Tworzymy unikalne strategie marketingowe, które przyniosą niesamowite efekty twojej marce
      </p>
      <Button link="/kontakt">Skontaktuj Się</Button>
    </section>
  )
}

export default Hero