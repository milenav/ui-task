import { useState } from 'react';
import menuItems from '../../menu.json';


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(null);

    const handleMenuClick = (index) => {
        setOpenMenu(openMenu === index ? null : index);
    };

    return (
        <nav>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <button onClick={() => handleMenuClick(index)}>
                            {item.title}
                        </button>
                        {item.submenu && openMenu === index && (
                            <ul>
                                {item.submenu.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                        <a href={subItem.url}>{subItem.title}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;