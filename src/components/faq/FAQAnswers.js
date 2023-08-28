import * as React from 'react'
import "/src/styles/components/faq/faqanswers.scss"
import SingleAnswer from './SingleAnswer'

import { isBrowser } from "../../utils"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollToPlugin from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)

const FAQAnswers = () => {
    const comp = React.useRef()
    React.useLayoutEffect(() => {
      if(isBrowser()) {
        const ctx = gsap.context(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: comp.current,
              start: '-10% center',
              end: '40% center',
            }
          })
          tl.fromTo(document.querySelectorAll('.main-faq__item'),
            {opacity: 0, y: '+=100'},
            {opacity: 1, y: 0, duration: .7, ease: "easeIn", stagger: 0.3,
          })
        }, comp)

        return () => ctx.revert()
      }
    }, [])

    return (
        <section className="main-faq" ref={comp}>
            <div id='ans'></div>

            <SingleAnswer question="1. W jakich mediach prowadzicie kampanie reklamowe?" isFirst={true}>
                Kampanie prowadzimy mediach społecznościowych takich jak: Facebook, Instagram, TikTok.
                Wykorzystujemy również platformę Google Ads do reklamowania Twojej strony internetowej.
            </SingleAnswer>
            <SingleAnswer question="2. Co jaki czas pobierana jest płatność?">
                Bazowo za usługi płaci się co miesiąc, jednak przygotowaliśmy specjalne promocje jeśli zdecydujesz
                się na dłuższą umowę.
            </SingleAnswer>
            <SingleAnswer question="3. Jak często będą spotkania w celu omówienia kampanii?">
                Rezultaty przedstawiamy co 2 tygodnie, na spotkaniu w Google Meets bądź Zoom. Pomoc techniczna
                jest dostępna codziennie, jeśli masz jakieś pytania bądź potrzebujesz pilnie spotkania - służymy pomocą.
            </SingleAnswer>
            <SingleAnswer question="4. Jak mierzycie efektywność działań marketingowych?">
                Platformy, z których korzystamy umożliwiają dostęp do statystyk o wynikach reklam. Dodatkowo
                Ciągle analizujemny ruch na twojej stronie. Wszystko to pozwala nam zoptymalizować nasze reklamy.
            </SingleAnswer>
            <SingleAnswer question="5. na czym polega darmowy okres próbny?">
                Za prowadzenie kampanii serwisy, takie jak Google Ads czy Facebook Ads, pobierają dzienne opłaty.
                I Ty poniesiesz tylko te opłaty. Prowadzenie reklam, copywriting i tworzenie grafik są u nas darmowe przez pierwsze 2 tygodnie.
                Później będziemy pobierać za to ustalone kwoty.
            </SingleAnswer>
            <SingleAnswer question="6. Co obejmuje usługa tworzenia strony internetowej?">
                Stworzymy dla Ciebie w pełni responsywną stronę od zera według Twojej wizji. Przygotujemy projekt strony, zajmiemy się hostingiem i domeną oraz
                ostatecznie zrobimy stronę internetową dostowaną pod analizy ruchu i z jak najlepszym SEO(pozycjonowanie strony w sieci)
            </SingleAnswer>
            <SingleAnswer question="7. Czy mogę anulować usługę w dowolnym momencie?">
                Można zakończyć współpracę w dowolnym momencie i pobieramy tylko kwotę za już wykonane usługi
            </SingleAnswer>
        </section>
    )
}

export default FAQAnswers