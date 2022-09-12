
import logo from '../../images/logo1.png'
import './header.css';
import Navbar from '../Navbar/NavBar';

function Header() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="App-header__logo-container">
                    <img src={logo} className="App-logo" alt="logo" />
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