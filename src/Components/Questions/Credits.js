import React from 'react';
import logo from "../../Assets/imgs/logo-uern.png"
import "../../index.css"

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
                <br/> xxxxxxxxxxxxx
                <br/> <br/> Mais informações: 
                <br/> <a href="ciciliamaia@uern.br">Cicilia Maia</a>
                <br/> <a href="ameliacarolina@uern.br ">Amélia Fernandes</a>
            </h6>
            <h5><br/><a href="http://portal.uern.br/coronavirus/">#uerncontracoronavirus</a></h5>

        </div>

        <div className="container buttons fixed-bottom">
            <div className="row">
                <div class="col-12 infos">
                    <h5>Mais Informações</h5>
                </div>
            </div>

            <div className="row">

                <div className="col-4">
                    <a href="#" class="btn btn-danger">Urgência</a>
                </div>

                <div className="col-4">
                    <a href="tel:84999941088" class="btn btn-success">Plantão</a>
                </div>

                <div className="col-4">
                    <a href="https://covid19-brazil-api.now.sh/" target="_blank" class="btn btn-primary">Dados 🚨</a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Credits;
