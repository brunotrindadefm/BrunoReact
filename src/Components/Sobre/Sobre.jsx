import React from "react";
import './Sobre.css';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { DiGithubAlt } from "react-icons/di";

function Sobre() {
    return (

        <div className="sobre">
            <h1>Oi, meu nome é Bruno</h1>

            <div className="brunoImg">
                <img src="src/images/BrunoTrindade.png" alt="Bruno Trindade"></img>
            </div>

            <div className="sobreEu">
                <h2>Desenvolvedor Web</h2>
            </div>
            <div className="sobreMim">
                <p>Sou uma pessoa curiosa e apaixonada por desafios. Estou constantemente buscando aprender e me desenvolver, tanto pessoalmente quanto profissionalmente. Tenho um forte desejo de fazer a diferença no mundo da tecnologia e estou ansioso para colaborar com equipes talentosas e inspiradoras.</p>
            </div>

            <div className="skills">
                <h2>Habilidades</h2>
                <div className="iconsCima">
                    <div>
                        <FaHtml5 />
                    </div>
                    <div>
                        <FaCss3Alt />
                    </div>
                    <div>
                        <TbBrandJavascript />
                    </div>
                    <div>
                        <FaJava />
                    </div>
                </div>
                <div className="iconsBaixo">
                    <div>
                        <SiReact />
                    </div>
                    <div>
                        <FaGitAlt />
                    </div>
                    <div>
                        <DiGithubAlt />
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Sobre;