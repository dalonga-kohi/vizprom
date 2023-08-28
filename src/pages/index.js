import * as React from "react"
import "../styles/_elements.scss"
import Layout from "../layouts/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Cards from "../components/Cards"
import Services from "../components/Services"
import ContactLinks from "../components/ContactLinks"
import WebSite from "../components/WebSite"

const IndexPage = () => {
  return (
    <Layout path="/">
      <Hero/>
      <About/>
      <Cards/>
      <WebSite/>
      <Services/>
      <ContactLinks/>
    </Layout>
  )
}

export default IndexPage

export function Head () {
    return (
      <>
      <html lang="pl"/>
      <title>VizProm | Strona Główna</title>
      <meta name="description" content="Agencja Marketingowa Vizprom. Zajmujemy się zarządzaniem kontami w mediach społecznościowych i wykorzystujemy nowoczesne kanały przekazu aby promować twoją markę."/>
      <meta name="keywords" content="Marketing Online, Agencja, Vizprom, Promocja firmy, Tworzenie Stron"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet"></link>
      <script type="text/javascript" data-cmp-ab="1" src="https://cdn.consentmanager.net/delivery/autoblocking/c2415473717b0.js" data-cmp-host="b.delivery.consentmanager.net" data-cmp-cdn="cdn.consentmanager.net" data-cmp-codesrc="1"></script>
      </>
    )
}
