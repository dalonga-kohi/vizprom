import * as React from 'react'
import "/src/styles/components/about/aboutteam.scss"
import gsap from 'gsap'
import {isBrowser} from '../../utils'
import ScrollTrigger from 'gsap/ScrollTrigger'
import TailMain from './TailMain'
import TailMinor from './TailMinor'

gsap.registerPlugin(ScrollTrigger)

const AboutTeam = () => {
    const comp = React.useRef()
    React.useLayoutEffect(() => {
      if(isBrowser()) {
        const ctx = gsap.context(() => {
          gsap.fromTo(document.querySelectorAll('.about-main__tail'),
            {opacity: 0, y: '+=100'},
            {opacity: 1, y: 0, duration: 1, ease: "easeIn", stagger: .5,scrollTrigger: {
              trigger: comp.current,
              start: '-20% center',
            }},

          )
        }, comp)

        return () => ctx.revert()
      }
    }, [])
    return (
        <div className='about-wrap'>
            <section className="about-main" ref={comp}>
                <TailMain />
                <TailMinor />
                <div className='about-main__tail about-main__tail--img'></div>
            </section>
        </div>
    )
}

export default AboutTeam