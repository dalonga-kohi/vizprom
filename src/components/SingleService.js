import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SingleService = ({caption, icon}) => {
    return (
        <article className="services__item">
            <header>{caption}</header>
            <FontAwesomeIcon icon={icon}/>
        </article>
    )
}

export default SingleService