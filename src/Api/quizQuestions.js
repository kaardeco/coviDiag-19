var quizQuestions = [
    {
        question: "Qual sua idade?",
        answers: [
            {
                type: "ficar alerta em casa-1",
                content: "0-12"
            },
            {
                type: "ficar alerta em casa-0",
                content: "12-60"
            },
           {
                type: "ficar em casa-2",
                content: "60+"
            }
        ]
    },
    {
        question: "Qual o seu sexo?",
        answers: [
            {
                type: "ficar em casa-0",
                content: "Masculino"
            },
           {
                type: "ficar em casa-0",
                content: "Feminino"
            }
        ]
    },
    {
        question: "É gestante?",
        answers: [
            {
                type: "ficar alerta em casa-1",
                content: "Sim"
            },
           {
                type: "ficar em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "Em qual trimestre de gestação?",//Caso seja gestasnte
        answers: [
            {
                type: "ficar alerta em casa-0",
                content: "1ºTrimestre"
            },
            {
                type: "ficar alerta em casa-0",
                content: "2ºTrimestre"
            },
           {
                type: "ficar alerta em casa-1",
                content: "3ºTrimestre"
            }
        ]
    },
    {
        question: "Possui doenças renais?",
        answers: [
            {
                type: "ficar alerta em casa-1",
                content: "Sim"
            },
           {
                type: "ficar em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "Possui doenças cardiovasculares?",
        answers: [
            {
                type: "ficar alerta em casa-1",
                content: "Sim"
            },
           {
                type: "ficar em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "Possui diabetes?",
        answers: [
            {
                type: "ficar alerta em casa-1",
                content: "Sim"
            },
           {
                type: "ficar em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "Já fez quimioterapia?",
        answers: [
            {
                type: "ficar alerta em casa-1",
                content: "Sim"
            },
           {
                type: "ficar em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "Possui hipertensão?",
        answers: [
            {
                type: "ficar alerta em casa-1",
                content: "Sim"
            },
           {
                type: "ficar em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "Possui alguma doença respiratória?",
        answers: [
            {
                type: "ficar alerta em casa-1",
                content: "Sim"
            },
           {
                type: "ficar em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "É fumante?",
        answers: [
            {
                type: "ficar alerta em casa-1",
                content: "Sim"
            },
           {
                type: "ficar em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "Possui alguma doença autoimune?",
        answers: [
            {
                type: "ficar alerta em casa-1",
                content: "Sim"
            },
           {
                type: "ficar em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "Tem a imunidade comprometida/suprimida?",
        answers: [
            {
                type: "ficar alerta em casa-1",
                content: "Sim"
            },
           {
                type: "ficar em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "Fez cirurgia nos últimos 6 meses?",
        answers: [
            {
                type: "ficar alerta em casa-1",
                content: "Sim"
            },
           {
                type: "ficar em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "Teve contato com alguém suspeito de ter a COVID-19?",
        answers: [
            {
                type: "ficar alerta em casa-1",
                content: "Sim"
            },
           {
                type: "ficar em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "Viajou para o exterior nos últimos 2 meses?",
        answers: [
            {
                type: "ficar alerta em casa-1",
                content: "Sim"
            },
           {
                type: "ficar em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "Você está sentindo febre?",
        answers: [
            {
                type: "ficar alerta em casa-1",
                content: "Sim"
            },
            {
                type: "ficar alerta em casa",
                content: "Sim, há mais de dois dias"
            },
           {
                type: "ficar em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "Tomou algum medicamento para febre?",//Caso tenha febre
        answers: [
            {
                type: "ficar alerta em casa-1",
                content: "Sim"
            },
           {
                type: "ficar em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "Mesmo com uso de medicamentos os sintomas persistem após 2h?",
        answers: [
            {
                type: "ficar alerta em casa-3",
                content: "Sim"
            },
           {
                type: "ficar em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "Está com coriza?",
        answers: [
            {
                type: "ficar alerta em casa-1",
                content: "Sim"
            },
            {
                type: "ficar alerta em casa",
                content: "Sim, há mais de dois dias"
            },
           {
                type: "ficar em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question:"Está com o nariz entupido?"
        answers: [
            {
                type: "fica alerta em casa-1"
                content: "Sim"
            },
            {
                type: "fica em casa-0"
                content: "Não"
            },
        ]
    },
    {
        question: "Possui cansaço respiratório? (Leve dificuldade para respirar)"
        answers: [
            {
                type: "fica alerta em casa-2"
                content: "Sim"
            },
            {
                type: "fica em casa-0"
                content: "Não"
            },
        ]
    },
    {
        question: "Tomou algum medicamento para o desconforto respiratório?"
        answers: [
            {
                type: "fica alerta em casa-2"
                content: "Sim"
            },
            {
                type: "fica em casa-0"
                content: "Não"
            },
        ]
    },
    {
        question: "Mesmo com uso de medicamentos os sintomas persistem?"
        answers: [
            {
                type: "procurar um posto de saúde-3"
                content: "Sim"
            },
            {
                type: "fica em casa-0"
                content: "Não"
            },
        ]
    },

    {
        question: "Você está tossindo? (Tosse seca ou cheia)",
        answers: [
            {
                type: "procurar um posto de saúde-1",
                content: "Sim"
            },
            {
                type: "ficar alerta em casa",
                content: "Sim, há mais de dois dias"
            },
           {
                type: "ficar em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "Está sentindo fadiga, exaustão no corpo, como um cansaço, dores?",
        answers: [
            {
                type: "procurar um posto de saúde-1",
                content: "Sim"
            },
           {
                type: "ficar em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "Está com diarréia?",
        answers: [
            {
                type: "procurar um posto de saúde-1",
                content: "Sim"
            },
           {
                type: "ficar em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "Está com dor de garganta?",
        answers: [
            {
                type: "procurar um posto de saúde-1",
                content: "Sim"
            },
           {
                type: "ficar em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "Está vomitando?"
        answers: [
            {
                type: "fica alerta em casa-2"
                content: "Sim"
            },
            {
                type: "fica em casa-0"
                content: "Não"
            },
        ]
    },
    {
        question: "Está tomando algum medicamento?",
        answers: [
            {
                type: "ficar alerta em casa-1",
                content: "Sim"
            },
           {
                type: "fica em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "Mesmo com uso de medicamentos os sintomas persistem após 2h?",
        answers: [
            {
                type: "procurar um posto de saúde-3",
                content: "Sim"
            },
           {
                type: "ficar alerta em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "Está com dificuldades de sentir cheiros e/ou sabores?",
        answers: [
            {
                type: "fica alerta em casa-2",
                content: "Sim"
            },
           {
                type: "ficar em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "Está tendo dificuldade para respirar com dor ou pressão no peito?",
        answers: [
            {
                type: "procurar um hospital-3",
                content: "Sim"
            },
           {
                type: "ficar alerta em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "Está tendo convulsões?"
        answers: [
            {
                type: "procurar um hospital-3"
                content: "Sim"
            },
            {
                type: "fica alerta em casa-0"
                content: "Não"
            },
        ]
    },
    
    {
        question: "Está notando as suas extremidades azuladas?",
        answers: [
            {
                type: "procurar um hospital-1",
                content: "Sim"
            },
           {
                type: "ficar em casa-0",
                content: "Não"
            }
        ]
    },
    {
        question: "Está notando o rosto ou os lábios azulados?",
        answers: [
            {
                type: "procurar um hospital-3",
                content: "Sim"
            },
           {
                type: "ficarem casa-0",
                content: "Não"
            }
        ]
    },
  ];
  
  export default quizQuestions;
