import './../../App.scss';
import footerData from './../../footer.json';

import FooterItems from './FooterItems';

const Footer = () => {

    return (
        <footer>
            <ul>
                {footerData.map((item, index) => (
                    <li key={index}>
                            {item.title}
                        {item.submenu === index && (
                            <ul>
                                {item.submenu.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                        <a href={subItem.url}>{subItem.title}</a>
                                        <FooterItems />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </footer>
    );
}

export default Footer;