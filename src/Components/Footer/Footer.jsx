import React from "react";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import './Footer.css';

function Footer () {
    return (

        <footer>
            <div className="direitos">
                <h2>Feito por Bruno Trindade. @copy</h2>
            </div>
            <div className="icons-social">
                <a href="https://github.com/brunotrindadefm"><VscGithub/></a>
                <a href="https://www.linkedin.com/in/bruno-trindade-883b03300/"><FaLinkedin/></a>
            </div>
        </footer>

    )
}
export default Footer;