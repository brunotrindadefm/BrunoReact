import { FiAlignJustify } from "react-icons/fi";
import React, { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav>

                <h2> Bruno Trindade </h2>

                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <a href="#sobre"><li>Sobre</li></a>
                    <a href="#habilidades"><li>Habilidades</li></a>
                    <a href="#projetos"><li>Projetos</li></a>
                    <a href="#missao"><li>Missão</li></a>
                </ul>
                <div className="menu-icon" onClick={toggleMenu}>
                    &#9776; {FiAlignJustify}
                </div>
            </nav>
        </header>
    )
}
export default Header;