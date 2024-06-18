import "./Projetos.css"
import React from "react"
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { PiListStarBold } from "react-icons/pi";
import { FaHome } from "react-icons/fa";

function Projetos() {
    return (
        <div className="projetos">
            <h2>PROJETOS</h2>

            <div className="projetosImagens">
                <div>
                    <p>Cervejaria</p>
                    <img src="src/images/Cervejaria.png" alt="cervejaria"></img>
                </div>
                <div>
                    <p>Balões</p>
                    <img src="src/images/JB&JBallons.png" alt="loja de balões"></img>
                </div>
                <div>
                <p>IMC</p>
                    <img src="src/images/CalculadoraIMC.png" alt="calculadora de imc"></img>
                </div>
                <div>
                <p>Mira</p>
                    <img src="src/images/miratreino.png" alt="treinamento de mira"></img>
                </div>
                <div>
                <p>React</p>
                    <img src="src/images/CalculadoraIMC.png" alt="calculadora de imc"></img>
                </div>
                <div>
                <p>React</p>
                    <img src="src/images/Cervejaria.png" alt="calculadora de imc"></img>
                </div>
            </div>

            <div className="contato">
                <h2>CONTATO</h2>
                <div>
                    <MdOutlineDriveFileRenameOutline/> Bruno Trindade Friaça Moreira
                </div>
                <div>
                    <PiListStarBold/> 18 Anos
                </div>
                <div>
                    <FaHome /> Belo Horizonte-MG 
                </div>
                <div>
                    <FaPhoneAlt /> 31 9 9069-6032 
                </div>
            </div>  
        </div>
    )
}

export default Projetos;