import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "/src/styles/components/navbar.scss"
import NavLinks from "./NavLinks"
import { Link } from "gatsby"
import { isBrowser, setScroll } from "../utils"

const NavBar = ({path}) => {
    if(isBrowser()) setScroll()
    return (
        <nav className="nav-bar">
            <div className="nav-bar__container">
                <Link to="/">
                <StaticImage src="../images/icon.png" width={60} layout="fixed" alt="logo" className="nav-bar__logo"/>
                </Link>
                <Link to='/' className="nav-bar__title">VizProm</Link>
                <input className="nav-bar__checkbox" type="checkbox" name="nav-check" id="nav-check"/>
                <div className="nav-bar__hamburger">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
                </div>

                <div className="nav-bar__items">
                    <div className="nav-bar__items__wrap">
                        <NavLinks path={path}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar