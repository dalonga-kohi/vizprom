import * as React from "react"
import "../styles/_elements.scss"
import Layout from "../layouts/Layout"
import AboutHero from "../components/about/AboutHero"
import AboutTeam from "../components/about/AboutTeam"
import ContactLinks from "../components/ContactLinks"

const ProcessPage = () => {
  return (
    <Layout path="/onas">
      <AboutHero/>
      <AboutTeam/>
      <ContactLinks customClass='about-contact'/>
    </Layout>
  )
}

export default ProcessPage

export function Head () {
  return (
    <>
    <html lang="pl"/>
    <title>VizProm | Proces</title>
    <meta name="description" content="Agencja Marketingowa Vizprom. Zajmujemy się zarządzaniem kontami w mediach społecznościowych i wykorzystujemy nowoczesne kanały przekazu aby promować twoją markę."/>
    <meta name="keywords" content="Marketing Online, Agencja, Vizprom, Promocja firmy, Tworzenie Stron"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet"></link>
    </>
  )
}