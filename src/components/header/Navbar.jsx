import {useState} from 'react';
import menuItems from '../../menu.json';
import {IoClose, IoMenu} from "react-icons/io5";

const Navbar = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const firstMenuItems = menuItems.slice(0, menuItems.length - 3);
    const lastMenuItems = menuItems.slice(-3);

    return (
        <nav className="nav-menu">
            <div onClick={() => setIsOpen(!isOpen)} className="nav-toggle">
                {
                    isOpen ? <IoClose/> : <IoMenu/>
                }
            </div>

            <ul className={`nav-list ${isOpen ? 'active' : 'inactive'}`}>
                {firstMenuItems.map((option, index) => (
                    <>
                        <select
                            value={selectedValue}
                            onChange={(e) => setSelectedValue(e.target.value)}
                        >
                            <option hidden selected>{option.title}</option>
                            {option.submenu.map((subItem, subIndex) => (
                                <option className="nav-item" key={subIndex}>
                                    <a className="nav-link" href={subItem.url}>{subItem.title}</a>
                                </option>
                            ))}
                        </select>
                    </>
                ))}

                <ul className="nav-list nav-list-right">
                    {lastMenuItems.map((item, index) => (
                        <li className="nav-item" key={index}>
                            <a className="nav-link" href={item.url}>{item.title}</a>
                            {item.submenu && selectedValue === index && (
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
