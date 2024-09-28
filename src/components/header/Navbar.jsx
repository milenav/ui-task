import { useState } from 'react';
import menuItems from '../../menu.json';
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(null);
const [isOpen, setIsOpen] = useState(false);
    const handleMenuClick = (index) => {
        setOpenMenu(openMenu === index ? null : index);
    };

    const firstMenuItems = menuItems.slice(0, menuItems.length - 3);
    const lastMenuItems = menuItems.slice(-3);

    return (
        <nav className="nav-menu">
            <div onClick={() => setIsOpen(!isOpen)} className="nav-toggle" id="nav-toggle">
                {
                    isOpen ? <IoClose/> : <IoMenu/>
                }
            </div>

            <ul className={`nav-list ${isOpen ? 'active' : 'inactive'}`}>
                {firstMenuItems.map((item, index) => (
                    <li className="nav-item" key={index}>
                        <button onClick={() => handleMenuClick(index)}>
                            {item.title}
                        </button>
                        {item.submenu && openMenu === index && (
                            <ul className="submenu">
                                {item.submenu.map((subItem, subIndex) => (
                                    <li className="nav-item" key={subIndex}>
                                        <a className="nav-link" href={subItem.url}>{subItem.title}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}

                <ul className="nav-list nav-list-right">
                    {lastMenuItems.map((item, index) => (
                        <li className="nav-item" key={index}>
                            <button onClick={() => handleMenuClick(index)}>
                                {item.title}
                            </button>
                            {item.submenu && openMenu === index && (
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
                    <li>EN</li>
                </ul>
            </ul>
        </nav>
    );
};

export default Navbar;
