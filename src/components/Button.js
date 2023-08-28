import React from 'react'
import "../styles/components/button.scss"
import { Link } from 'gatsby'

const Button = ({link, click=false, children}) => {
    if(!click) click = () => {}

    return (
        <div className='btn-wrapper'>
            <Link to={link} className='btn-wrapper__item' onClick={click}>{children}</Link>
        </div>
    )
}

export default Button