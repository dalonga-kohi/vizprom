import * as React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquarePhone} from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const OtherMedia = () => {
    return (
        <div className='contact-wrap__contacts'>
            <a href="mailto:kontakt@vizprom.pl" className="contact-wrap__contacts__item"><FontAwesomeIcon icon={faEnvelope}/> kontakt@vizprom.pl</a>
            <div className="contact-wrap__contacts__item"><FontAwesomeIcon icon={faSquarePhone}/> +48 600 673 782</div>
        </div>
    )
}

export default OtherMedia