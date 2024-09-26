import React, { useState, useEffect } from 'react';

// Компонент за Dropdown менюто
const Dropdown = ({ text, href, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-button">
                {text}
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {content.map((item, index) => (
                        <li key={index}>
                            <a href={href}>{Object.keys(item).map(key => <span key={key}>{item[key]}</span>)}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;