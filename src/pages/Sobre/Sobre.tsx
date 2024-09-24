import React from "react";
import "./Sobre.css";


const Sobre = () => {
    return (
        <div className="sobre">
            <h1>Sobre</h1>
            <img src="https://images.vexels.com/content/146662/preview/cute-sad-emoticon-f817b3.png" alt="João Vitor dos Santos" />
            <div className="card">
                <h2>Nome: João Vitor dos Santos</h2>
                <h3>Profissão: Estagiário</h3>
                <h3>Sou um jovem de 19 anos, com muitos sonhos e pouca bagagem. No momento sou estagiário na prefeitura de minha cidade 'Ubiratã'.
                    Passo meu tempo livre jogando e conversando sobre qualquer coisa.
                    No fim, apenas um jovem anseiando por um futuro em que possa viver com tranquilidade.
                    Este é apenas um site básico para desenvolvimento pessoal</h3>
            </div>
            <a href="https://github.com/jvsantos27">Link do GitHub!</a>
        </div>
    );
}

export default Sobre;
