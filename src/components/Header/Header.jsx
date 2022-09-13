
import logo from '../../images/logo1.png'
import logo2 from '../../images/espiral.png'
import './header.css';
import Navbar from '../Navbar/NavBar';

function Header() {

    return (
        <div className="header-container">
            <header className="header">
                <div className="header__logo-container">
                    <img src={logo} className="header__logo" alt="logo2" />
                    <a href="index.html"><img src={logo2} className="header__logo2" alt="logo" /></a>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <Navbar />
                
            </header>
            
        </div>
    );
}

export default Header;