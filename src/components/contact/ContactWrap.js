import * as React from 'react'
import "/src/styles/components/contact/contact.scss"

import Booking from './Booking'
import OtherMedia from './OtherMedia'

const ContactWrap = () => {
    return (
        <section className='contact-wrap'>
            <h1>Zarezerwuj darmowe konsultacje</h1>
            <Booking/>
            <h2>Inne Metody</h2>
            <OtherMedia/>
        </section>
    )
}

export default ContactWrap