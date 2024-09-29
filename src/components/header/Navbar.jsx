import {useState} from 'react';
import menuItems from '../../menu.json';
import {IoClose, IoMenu, IoChevronDown} from "react-icons/io5";
import flag from '../../assets/images/flag.svg';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const firstMenuItems = menuItems.slice(0, menuItems.length - 3);
    const lastMenuItems = menuItems.slice(-3);

    return (
        <nav className="nav-menu">
            <div onClick={() => setIsOpen(!isOpen)} className={`nav-toggle ${isOpen ? 'open' : ''}`}>
                {
                    isOpen ? <IoClose className="close-icon"/> : <IoMenu className="menu-icon"/>
                }
            </div>

            <ul className={`nav-list ${isOpen ? 'active' : 'inactive'}`}>
                {firstMenuItems.map((item, index) => (
                    <li className="nav-item" key={index}>
                        <a className="nav-link" href={item.url}>{item.title}</a>
                        <ul className="submenu">
                            {item.submenu.map((subItem, subIndex) => (
                                <li className="nav-item" key={subIndex}>
                                    <a className="nav-link" href={subItem.url}>{subItem.title}</a>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            <ul className="nav-list nav-list-right">
                {lastMenuItems.map((item, index) => (
                    <li className="nav-item" key={index}>
                        <a className="nav-link" href={item.url}>{item.title}</a>
                        {item.submenu === index && (
                            <ul className="nav-list">
                                {item.submenu.map((subItem, subIndex) => (
                                    <li className="nav-item" key={subIndex}>
                                        <a className="nav-link" href={subItem.url}>{subItem.title}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
                <li className="language">
                    <img src={flag} alt="flag"/>
                    <span>EN</span>
                    <IoChevronDown/>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
