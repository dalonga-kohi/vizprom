import * as React from 'react'
import "/src/styles/components/faq/faqhero.scss"
import Button from '../Button'
import { isBrowser } from "../../utils"

import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

const FAQHero = () => {
    const comp = React.useRef()
    React.useLayoutEffect(() => {
      if(isBrowser()) {
        const ctx = gsap.context(() => {

        }, comp)

        return () => ctx.revert()
      }
    }, [])

    const scrollHandler = () => {
        gsap.to(window, {
            duration: .7, scrollTo:'#ans'
        })
    }

    return (
        <article className="faq-hero">
            <h1>Najczęściej Zadawane Pytania</h1>
            <Button link="/faq#odpowiedzi" click={scrollHandler.bind(this)}>Przejdź Dalej</Button>
        </article>
    )
}

export default FAQHero