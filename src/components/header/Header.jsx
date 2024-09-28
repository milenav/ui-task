import './Nav.scss';
import Navbar from './Navbar';
import logo from "../../assets/images/app-logo.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="nav-area container">
                <a href="/">
                    <img className="logo" src={logo} alt="logo EGT DIGITAL"/>
                </a>
                <Navbar/>
            </div>
        </header>
    );
};

export default Header;