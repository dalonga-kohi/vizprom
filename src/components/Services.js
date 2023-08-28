import * as React from "react"
import "../styles/components/services.scss"
import SingleService from "./SingleService"
import { isBrowser } from "../utils"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faHashtag } from "@fortawesome/free-solid-svg-icons"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"

gsap.registerPlugin(ScrollTrigger)

const Services = () => {
    const comp = React.useRef()
    React.useLayoutEffect(() => {
      if(isBrowser()) {
        const ctx = gsap.context(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: comp.current,
              start: 'top center',
              end: '40% center',
              scrub: 5
            }
          })
          tl.fromTo(document.querySelectorAll('.services__item'),
            {opacity: 0, y: '+=100'},
            {opacity: 1, y: 0, duration: .6, ease: "easeIn", stagger: 0.1,
          })
        }, comp)

        return () => ctx.revert()
      }
    }, [])


    return (
        <section className="services" ref={comp}>
            <h1>Nasze Usługi</h1>
            <SingleService caption="Reklama w Google Ads i Mediach Społecznościowych" icon={faPhotoFilm}/>
            <SingleService caption="Tworzenie i Zarządzanie Stroną Internetową" icon={faGlobe}/>
            <SingleService caption="Tworzenie kampanii poprzez wiadomości email" icon={faEnvelope}/>
            <SingleService caption="Zarządzanie Kontami w Mediach Społecznościowych" icon={faHashtag}/>
            <SingleService caption="Tworzenie haseł i opisów reklamowych" icon={faPenToSquare}/>
        </section>
    )
}

export default Services