import './Header.css';
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import CopiarGmail from './CopiarGmail';

function Header() {
    const email = "btrindade@gmail.com";

    return (
        <header>
            <nav>

                <h2> Bruno Trindade </h2>

                <div className="icons-social">
                    <CopiarGmail email={email}/>
                    <a href="https://github.com/brunotrindadefm" className='gitHub' target='_blank'><VscGithub /></a>
                    <a href="https://www.linkedin.com/in/bruno-trindade-883b03300/" target='_blank'><FaLinkedin /></a>
                </div>
            </nav>
        </header>
    )
}
export default Header;