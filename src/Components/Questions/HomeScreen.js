import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


//import logo from "../../Assets/imgs/logo-uern.png"
import "../../index.css"

export default function HomeScreen(){
    const [open, setOpen] = React.useState(true);
    
    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">{"Bem vind@ ao CoviDiag-19"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                <p align = "justify">Nosso objetivo é te orientar  na identificação de sinais e sintomas sugestivos à Covid-19. Para isso, faremos algumas perguntas, tudo bem?</p>
                <p align = "justify"> --- <br/> O COVIDIAG-19 faz apenas análise inicial dos sinais e sintomas sugestivos à COVIDIAG-19 sendo caracterizado como sistema de apoio à decisão médica. Desta forma, não substitui o diagnóstico médico.</p>
            </DialogContentText>
            </DialogContent>
            <DialogActions>

            <Button onClick={handleClose} color="primary" autoFocus>
                Vamos lá!
            </Button>
            </DialogActions>
            </Dialog>
        </div>
    );
}
