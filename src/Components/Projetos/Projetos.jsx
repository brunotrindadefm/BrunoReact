import "./Projetos.css"
import React from "react"
import { FaBook } from "react-icons/fa";

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
            </div>

            <div className="educacao">
                <h2>EDUCAÇÃO</h2>
                <div>
                    <FaBook className="book"/> <p>Escola Municipal Maria Valdina</p>
                </div>
                <div>
                    <FaBook className="book" /> <p>Escola Estadual Nelson Fernandes Friaça</p>
                </div>
                <div>
                    <FaBook className="book"/> <p>FUMEC</p>
                </div>
            </div>
        </div>
    )
}

export default Projetos;