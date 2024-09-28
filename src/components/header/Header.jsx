// import React, {useEffect, useState} from 'react';
// import {IoMenu, IoClose} from 'react-icons/io5';
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
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
// const Menu = () => {
//     const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//
//     const [openDropdown, setOpenDropdown] = useState(null);
//
//     const toggleDropdown = (index) => {
//         setOpenDropdown(openDropdown === index ? null : index);
//     };
//
//     // Function to toggle mobile menu
//     const toggleMobileMenu = () => {
//         setMobileMenuOpen(!isMobileMenuOpen);
//     };
//
//     return (
//         <header className="header">
//             <div className="logo">
//                 EGT logo
//             </div>
//
//             {/* Desktop Navigation */}
//             <nav className="desktop-menu">
//                 <ul>
//                     {menu.map((item, index) => (
//                         <li key={index}>
//                             <select
//                                 className="bg-blue-500 text-white px-4 py-2 rounded-md w-full text-left"
//                                 onClick={() => toggleDropdown(index)}
//                             >
//                                 {item.text}
//
//
//                             </select>
//
//                             {/* Dropdown content */}
//                             {openDropdown === index && (
//                                 <select className="mt-2 pl-4 space-y-1">
//                                     {Object.keys(item.content[0]).map((key, subIndex) => (
//                                         <option
//                                             key={subIndex}
//
//                                             className="block text-blue-600 hover:underline"
//                                         >
//                                             <a href={item.content[0][key]}>{item.content[0][key]}</a>
//
//                                         </option>
//                                     ))}
//                                 </select>
//                             )}
//                         </li>
//                     ))}
//                 </ul>
//
//                 {/*{isOpen && menu.map((page, index) =>*/}
//                 {/*    <ul key={index}>*/}
//                 {/*        {Object.entries(page.content).map(([key, value], index) =>*/}
//                 {/*            <li key={index}><a href={key}>{value}</a></li>*/}
//                 {/*        )}*/}
//                 {/*    </ul>*/}
//                 {/*)}*/}
//
//                 {/*<ul>*/}
//                 {/*    <li className="dropdown">*/}
//                 {/*        R-LINE*/}
//                 {/*        <ul className="dropdown-content">*/}
//                 {/*            <li>*/}
//                 {/*                <a href="#">Premier R4</a>*/}
//                 {/*            </li>*/}
//                 {/*            <li>*/}
//                 {/*                <a href="#">Premier R6</a>*/}
//                 {/*            </li>*/}
//                 {/*            <li>*/}
//                 {/*                <a href="#">Premier R8</a>*/}
//                 {/*            </li>*/}
//                 {/*        </ul>*/}
//                 {/*    </li>*/}
//                 {/*    <li className="dropdown">*/}
//                 {/*        S-LINE*/}
//                 {/*        <ul className="dropdown-content">*/}
//                 {/*            <li>*/}
//                 {/*                <a href="#">Premier R4</a>*/}
//                 {/*            </li>*/}
//                 {/*            <li>*/}
//                 {/*                <a href="#">Premier R6</a>*/}
//                 {/*            </li>*/}
//                 {/*            <li>*/}
//                 {/*                <a href="#">Premier R8</a>*/}
//                 {/*            </li>*/}
//                 {/*        </ul>*/}
//                 {/*    </li>*/}
//                 {/*    <li className="dropdown">*/}
//                 {/*        T-LINE*/}
//                 {/*        <ul className="dropdown-content">*/}
//                 {/*            <li>*/}
//                 {/*                <a href="#">Premier R4</a>*/}
//                 {/*            </li>*/}
//                 {/*            <li>*/}
//                 {/*                <a href="#">Premier R6</a>*/}
//                 {/*            </li>*/}
//                 {/*            <li>*/}
//                 {/*                <a href="#">Premier R8</a>*/}
//                 {/*            </li>*/}
//                 {/*        </ul>*/}
//                 {/*    </li>*/}
//                 {/*    <li className="dropdown">*/}
//                 {/*        SBG*/}
//                 {/*        <ul className="dropdown-content">*/}
//                 {/*            <li>*/}
//                 {/*                <a href="#">Premier R4</a>*/}
//                 {/*            </li>*/}
//                 {/*            <li>*/}
//                 {/*                <a href="#">Premier R6</a>*/}
//                 {/*            </li>*/}
//                 {/*            <li>*/}
//                 {/*                <a href="#">Premier R8</a>*/}
//                 {/*            </li>*/}
//                 {/*        </ul>*/}
//                 {/*    </li>*/}
//
//                 {/*    <li>News & Events</li>*/}
//                 {/*    <li>About Us</li>*/}
//                 {/*    <li>Contact Us</li>*/}
//                 {/*    <li><img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_Kingdom.svg"*/}
//                 {/*             alt="English Flag" className="flag"/></li>*/}
//                 {/*</ul>*/}
//             </nav>
//
//             {/* Mobile Navigation */}
//             <div className="mobile-menu">
//                 <div className="menu-icon" onClick={toggleMobileMenu}>
//                     {isMobileMenuOpen ? <IoClose/> : <IoMenu/>}
//                 </div>
//                 {isMobileMenuOpen && (
//                     <nav className="mobile-menu-content">
//                         <ul>
//                             <li className="dropdown">
//                                 <span>R-LINE</span>
//                                 <ul>
//                                     <li>Premier R4</li>
//                                     <li>Premier R6</li>
//                                     <li>Premier R8</li>
//                                 </ul>
//                             </li>
//                             <li className="dropdown">
//                             <span>S-LINE</span>
//                                 <ul>
//                                     <li>S-Line 1</li>
//                                     <li>S-Line 2</li>
//                                 </ul>
//                             </li>
//                             <li>T-LINE</li>
//                             <li>SBG</li>
//                             <li>News & Events</li>
//                             <li>About Us</li>
//                             <li>Contact Us</li>
//                             <li><img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_Kingdom.svg"
//                                      alt="English Flag" className="flag"/></li>
//                         </ul>
//                     </nav>
//                 )}
//             </div>
//         </header>
//     );
// };
//
// export default Menu;