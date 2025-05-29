import { LogoGrey } from '../Logo'
import './style.scss'

const Header = () => {
    return(
        <header className="header">
            <LogoGrey/>
            <a href="/">Home</a>
        </header>
    )
}

export default Header