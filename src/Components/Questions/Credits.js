import React from 'react';
import logo from "../../Assets/imgs/logo-uern.png";
import Button from '@material-ui/core/Button';
import "../../index.css";

function refreshPage() {
    window.location.reload(false);
}

function Credits() {
    return (
    <div className="credits-container">
        <div>
            <br/>
            <img src= {logo} alt="UERN"/>
            <br/><br/>
            <h6>
                Solução desenvolvida pelo Grupo de Engenharia de Software do Departamento de Informática em parceria com Departamento de Enfermagem da Universidade do Estado do Rio Grande do Norte (UERN), sob a coordenação da Profa. Dra. Cicília Maia e Profa. Ma. Amélia Fernandes.
            </h6>
            <h6>
                <br/>Colaboradores:
                <br/> <a href="https://github.com/kaardeco">Allan Kardec</a>
                <br/><a href="https://github.com/exlleysantos">Exlley Santos</a>
                <br/><a href="#">Fernando Ferreira</a>
                <br/><a href="#">Francisco Italo</a>
                <br/><a href="#">Guilherme Silveira</a>
                <br/><a href="#">Gustavo Patrick</a>
                <br/><a href="#">Jorge Braz</a>
                <br/><a href="#">Leilane Alice</a>
                <br/><a href="#">Lucas Duarte</a>
                <br/> <br/> Mais informações: 
                <br/> <a href="ciciliamaia@uern.br">Cicilia Maia</a>
                <br/> <a href="ameliacarolina@uern.br ">Amélia Fernandes</a>
            </h6>
            <h5><br/><a href="http://portal.uern.br/coronavirus/">#uerncontracoronavirus</a></h5>
            
            <Button onClick= {refreshPage} font-size = "15pt" color="primary" autoFocus>
                Retornar 
            </Button>
        </div>
    </div>
    );
}

export default Credits;
