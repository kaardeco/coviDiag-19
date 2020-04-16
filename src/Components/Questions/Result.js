import React from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Credits from './Credits'
import { MdHome } from 'react-icons/md';


function refreshPage() {
    //window.location.reload(false);
}


function Result(props) {
    return (
        <div className="result">
            <h6><span>{props.quizResult}</span></h6>
            <br/><br/>
            <Button onClick= {refreshPage} font-size = "15pt" color="primary" autoFocus>
                Retornar 
            </Button>
            <div className="container buttons fixed-bottom">
                <div className="row">
                    <div className="col-12 infos">
                    <h5>Mais Informações:</h5>
                    </div>
                </div>

                <div className="row">

                    <div className="col-4">
                    <a href="#" className="btn btn-link">Urgência</a>
                    </div>

                    <div className="col-4">
                    <a href="tel:84999941088" className="btn btn-link">Sobre</a>
                    </div>

                    <div className="col-4">
                    <a href="https://covid19-brazil-api.now.sh/" target="_blank" className="btn btn-link">Dados</a>
                    </div>

                </div>
            </div>
        </div>
    );
}

Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
};

export default Result;