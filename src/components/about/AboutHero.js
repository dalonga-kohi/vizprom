import * as React from 'react'
import "/src/styles/components/about/abouthero.scss"
import Button from '../Button'

import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

const AboutHero = () => {
    const scrollHandler = () => {
        gsap.to(window, {
            duration: .7, scrollTo:'.about-main'
        })
    }

    return (
        <article className="faq-hero">
            <h1>Zatrudniamy wielu ekspertów</h1>
            <Button link="/onas#zespół" click={scrollHandler.bind(this)}>Zobacz Więcej</Button>
        </article>
    )
}

export default AboutHero