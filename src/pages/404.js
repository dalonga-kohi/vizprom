import * as React from "react"
import { Link } from "gatsby"
import "../styles/_elements.scss"
import Layout from "../layouts/Layout"

const NotFoundPage = () => {
  return (
    <Layout path="/proces">
      <main><Link to="/">Go Back</Link></main>
    </Layout>
  )
}

export default NotFoundPage

export function Head () {
  return (
    <>
    <html lang="pl"/>
    <title>VizProm | Nie Znaleziono</title>
    <meta name="description" content="Agencja Marketingowa Vizprom. Zajmujemy się zarządzaniem kontami w mediach społecznościowych i wykorzystujemy nowoczesne kanały przekazu aby promować twoją markę."/>
    <meta name="keywords" content="Marketing Online, Agencja, Vizprom, Promocja firmy, Tworzenie Stron"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet"></link>
    </>
  )
}
