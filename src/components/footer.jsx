import React from 'react'
import './footer.css'
import gitIcon from '../imgs/iconsGitHub.svg'
import iconLinckeding from '../imgs/iconLinckeding.svg'

export const Footer = () => {
    return (
        <>

            <div id='blockCase'>
                <div className='lineFooter'></div>
                <div className="footerContent">
                    <p className="footerText">© Designed and developed by Mario Garcia Martinez</p>
                    <a href="https://github.com/MarioGM01" target="_blank">
                        <img src={gitIcon} alt="GitHub" className="footerIcon" />
                    </a>
                    <a href="https://www.linkedin.com/in/mario-garc%C3%ADa-mart%C3%ADnez-70846b283/" target="_blank">
                        <img src={iconLinckeding} alt="GitHub" className="footerIcon" />
                    </a>
                </div>
            </div>
        </>
    )
}
