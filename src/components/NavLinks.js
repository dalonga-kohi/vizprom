import React from "react"
import {Link } from "gatsby"

const NavLinks = ({path}) => {
    const links = [
        ['STRONA GŁÓWNA', '/', false],
        ['O NAS', '/onas', false],
        ['KONTAKT', '/kontakt', false],
        ['FAQ', '/faq', false],
    ]
    switch (path) {
        case '/':
            links[0][2] = true
            break;
        case '/onas':
            links[1][2] = true
            break;
        case '/kontakt':
            links[2][2] = true
            break;
        case '/faq':
            links[3][2] = true
            break;
        default:
            break;
    }

    const renderedLinks = links.map((l, i) => {
        return <Link to={l[1]} className={`nav-bar__items__link ${l[2] ? 'nav-bar__items__link--active' : ''}`} key={i}>{l[0]}</Link>
    })
    return (
        <>{renderedLinks}</>
    )
}

export default NavLinks