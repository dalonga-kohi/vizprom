import * as React from "react"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = ({ children, path}) => {
    return (
        <div id="wrap">
            <NavBar path={path}/>
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;