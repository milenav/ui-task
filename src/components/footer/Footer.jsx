import './Footer.scss';
import footerData from './../../footer.json';
import youTube from '../../assets/images/you-tube.svg';
import fb from '../../assets/images/fb.svg';

const Footer = () => {
    return (
        <footer className="footer container-fluid">
            <ul className="container row nav">
                {footerData.map((item, index) => (
                    <li key={index} className="nav-item">
                        <span>{item.title}</span>
                        {item.submenu && (
                            <ul className="nav">
                                {item.submenu.map((submenu, subIndex) => (
                                    <li key={subIndex}>
                                        <a className="nav-link" href={submenu.url}>{submenu.title}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>

            <div className="social-media">
                <a href="https://www.youtube.com/" target={"_blank"}>
                    <img src={youTube} alt="YouTube"/>
                </a>
                <a href="https://www.facebook.com/" target={"_blank"}>
                    <img src={fb} alt="Facebook"/>
                </a>
            </div>

            <div className="copyright">
                <p>&copy; 2024 Euro Games Technology All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;