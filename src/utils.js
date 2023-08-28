export const isBrowser = () => typeof window !== "undefined"

export const setScroll = () => {
    let prevScrollpos = window.scrollY

    window.onscroll = function() {
        let currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
            try {
            document.querySelector(".nav-bar").style.top = "0"
            } catch (error) {}
        } else {
            try {
                document.querySelector(".nav-bar").style.top = "-100px"
                } catch (error) {}
        }
        prevScrollpos = currentScrollPos
    }
}