import * as React from "react"
import { isBrowser } from "../utils"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

gsap.registerPlugin(ScrollTrigger)

const SingleCard = ({icon, title,index, children}) => {
  const comp = React.useRef()
  React.useLayoutEffect(() => {
    if(isBrowser()) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: comp.current,
            start: '-10% center',
          }
        })
        tl.fromTo(document.querySelectorAll(`.card-anim-${index}`),
          {opacity: 0, y: '+=100'},
          {opacity: 1, y: 0, duration: .6, ease: "easeIn", stagger: 0.1,
        })
      }, comp)

      return () => ctx.revert()
    }
  }, [index])


  return (
    <article className="card" ref={comp}>
        <FontAwesomeIcon className={`card__icon card-anim-${index}`} icon={icon}/>
        <header className={`card-anim-${index}`}>{title}</header>
        <p className={`card-anim-${index}`}>{children}</p>
    </article>
  )
}

export default SingleCard