import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const SingleAnswer = ({question, children, isFirst=false}) => {
    const [active, setActive] = React.useState(isFirst)
    const comp = React.useRef(null)
    React.useEffect(() => {
        comp.current.addEventListener('click', () => {
            setActive(a => !a)
        })
    }, [comp])
    return (
        <article className={`main-faq__item ${active ? 'main-faq__item--active': ''}`} ref={comp}>
            <h2 className='main-faq__item__question'>{question} <FontAwesomeIcon className="main-faq__item__arrow" icon={faChevronRight}/></h2>
            <div className='main-faq__item__answer'>
                {children}
            </div>
        </article>
    )
}

export default SingleAnswer