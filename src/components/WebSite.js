import * as React from 'react'
import "../styles/components/website.scss"
import {StaticImage} from 'gatsby-plugin-image'

const WebSite = () => {
    return (
        <article className='website'>
            <StaticImage className='website__image' src='../images/dev-seo.png' alt='statystyki seo'/>
            <div className='website__text'>
                <h2>Nowoczesne, Dopasowane Strony</h2>
                <p className='website__text__main'>
                Tworzymy responsywne strony, które dopasowują się do każdego urządzenia, od smartfonów po duże monitory.
                Nasza firma stawia na nowoczesne technologie, co oznacza, że Twoja strona będzie nie tylko atrakcyjna wizualnie, ale także szybka, bezpieczna i wydajna. Dbanie o optymalizację i szybkość ładowania stron to dla nas priorytet, aby Twój biznes mógł zachwycić odwiedzających bez względu na ich oczekiwania.
                </p>
            </div>
        </article>
    )
}

export default WebSite