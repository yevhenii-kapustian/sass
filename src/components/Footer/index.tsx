import './style.scss'
import { LogoWhite } from '../Logo'

const Footer = () => {
    return(
        <footer className="footer">
            <div className='footer__title'>
                <LogoWhite/>
                <span>|</span>
                <h3>Yevhenii</h3>
            </div>
            <p>Copyright © 2025 Copyright Symbol</p>
        </footer>
    )
}

export default Footer