import * as React from "react"
import "../styles/_elements.scss"
import Layout from "../layouts/Layout"
import ContactWrap from "../components/contact/ContactWrap"

const ContactPage = () => {
  return (
    <Layout path="/kontakt">
      <ContactWrap/>
    </Layout>
  )
}

export default ContactPage

export function Head () {
  return (
    <>
    <html lang="pl"/>
    <title>VizProm | Kontakt</title>
    <meta name="description" content="Agencja Marketingowa Vizprom. Skontaktuj się z nami już teraz"/>
    <meta name="keywords" content="Marketing Online, Agencja, Vizprom, Promocja firmy, Tworzenie Stron"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet"></link>
    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
    </>
  )
}