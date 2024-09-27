import './Footer.scss';
import footerData from './../../footer.json';

// import youTube from '/public/you-tube.png'
// import fb from '/public/fb.png'

const Footer = () => {

    return (
        <footer className="footer container-fluid">
            <ul className="container row nav">
                {footerData.map((item, index) => (
                    <li key={index} className="nav-item">
                         <span>{item.title}</span>
                        <ul className="nav">
                            <li>
                                <a className="nav-link" href="">Premier R6</a>
                            </li>
                            <li>
                                <a className="nav-link" href="">Premier R6</a>
                            </li>
                            <li>
                                <a className="nav-link" href="">Premier R6</a>
                            </li>
                            <li>
                                <a className="nav-link" href="">Premier R6</a>
                            </li>
                        </ul>
                    </li>
                ))}
                <div>
                    {/*tuk dvete imgs*/}
                </div>
            </ul>
            <div className="copyright">
                <p>&copy; 2024 Euro Games Technology All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;