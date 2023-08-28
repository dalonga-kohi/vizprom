import * as React from "react"
import "../styles/_elements.scss"
import Layout from "../layouts/Layout"

import FAQHero from '../components/faq/FAQHero'
import FAQAnswers from '../components/faq/FAQAnswers'

const FAQPage = () => {
  return (
    <Layout path="/faq">
      <FAQHero/>
      <FAQAnswers/>
    </Layout>
  )
}

export default FAQPage

export function Head () {
  return (
    <>
    <html lang="pl"/>
    <title>VizProm | FAQ</title>
    <meta name="description" content="Poznaj odpowiedzi Agencji Vizprom na najczęściej zadawane pytania."/>
    <meta name="keywords" content="Marketing Online, Agencja, Vizprom, Promocja firmy, Tworzenie Stron"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet"></link>
    </>
  )
}