import * as React from "react"
import "/src/styles/components/about.scss"
import { isBrowser } from "../utils"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import { Link } from "gatsby"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

const About = () => {
  const comp = React.useRef()
  React.useLayoutEffect(() => {
    if(isBrowser()) {
      const ctx = gsap.context(() => {
        let mm = gsap.matchMedia();
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: comp.current,
            start: '-20% center',
          }
        })
        mm.add("(min-width: 800px)", () => {
          tl.to(window, {
            duration: .7, scrollTo:'.about'
          })
        })
        gsap.fromTo(document.querySelectorAll('.about-anim'),
          {opacity: 0, y: '+=100'},
          {opacity: 1, y: 0, duration: .7, ease: "easeIn", stagger: 0.3,scrollTrigger: {
            trigger: comp.current,
            start: '-20% center',
          }},

        )
      }, comp)

      return () => ctx.revert()
    }
  }, [])

  return (
    <article className="about" ref={comp}>
      <header className="about-anim">Twój Sukces to Nasza Misja</header>
      <p className="about-anim">Wszystkie działania podejmujemy w zgodzie z Tobą. To Twoja wizja, a my pomożemy Ci ją spełnić.</p>
      <Link to='/onas' className="about__button about-anim">Więcej o Nas</Link>
    </article>
  )
}

export default About