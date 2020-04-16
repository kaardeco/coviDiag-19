var quizQuestions = [
    {
        question: "Qual o seu sexo?",
        answers: [
            {
                type: "masculino",
                content: "Masculino"
            },
           {
                type: "p1",
                content: "Feminino"
            }
        ]
    },

    {
        question: "É gestante?",
        answers: [
            {
                type: "gestante",
                content: "Sim"
            },
           {
                type: "naoGestante",
                content: "Não"
            }
        ]
    },

    {
        question: "Em qual trimestre de gestação?",//Caso seja gestasnte
        answers: [
            {
                type: "p1",
                content: "1º Trimestre"
            },
            {
                type: "p2",
                content: "2º Trimestre"
            },
           {
                type: "trimestre",
                content: "3º Trimestre"
            }
        ]
    },

    {
        question: "Qual sua idade?",
        answers: [
            {
                type: "p1",
                content: "0 a 12 anos"
            },
            {
                type: "p1",
                content: "13 a 60 anos"
            },
           {
                type: "idade",
                content: "Mais de 60 anos"
            }
        ]
    },

    {
        question: "Você está sentindo febre?",
        answers: [
            {
                type: "p3",
                content: "Sim"
            },
            {
                type: "p3",
                content: "Sim, há mais de dois dias"
            },
           {
                type: "semFebre",
                content: "Não"
            }
        ]
    },

    {
        question: "Tomou algum medicamento para febre?",//Caso tenha febre
        answers: [
            {
                type: "p2",
                content: "Sim"
            },
           {
                type: "noMedicament",
                content: "Não"
            }
        ]
    },
    
    {
        question: "Mesmo com uso de medicamentos os sintomas persistem após 2h?",
        answers: [
            {
                type: "persistentFever",
                content: "Sim"
            },
           {
                type: "p2",
                content: "Não"
            }
        ]
    },

    {
        question: "Está sentindo falta de ar, com dor ou pressão no peito?",
        answers: [
            {
                type: "hasDyspnea",
                content: "Sim"
            },
           {
                type: "p1",
                content: "Não"
            }
        ]
    },

    {
        question: "Está com coriza?",
        answers: [
            {
                type: "temCoriza",
                content: "Sim"
            },
            {
                type: "temCoriza",
                content: "Sim, há mais de dois dias"
            },
           {
                type: "p1",
                content: "Não"
            }
        ]
    },

    {
        question: "Você está tossindo? (Tosse seca ou cheia)",
        answers: [
            {
                type: "temTosse",
                content: "Sim"
            },
            {
                type: "temTosse",
                content: "Sim, há mais de dois dias"
            },
           {
                type: "p2",
                content: "Não"
            }
        ]
    },
/*
    {
        question: "Está tendo convulsões?",
        answers: [
            {
                type: "p3",
                content: "Sim"
            },
            {
                type: "p1",
                content: "Não"
            },
        ]
    },

    {
        question: "Possui doenças renais?",
        answers: [
            {
                type: "ficar alerta em casa",
                content: "Sim"
            },
           {
                type: "ficar em casa",
                content: "Não"
            }
        ]
    },

    {
        question: "Possui doenças cardiovasculares?",
        answers: [
            {
                type: "ficar alerta em casa",
                content: "Sim"
            },
           {
                type: "ficar em casa",
                content: "Não"
            }
        ]
    },
    
    {
        question: "Possui diabetes?",
        answers: [
            {
                type: "ficar alerta em casa",
                content: "Sim"
            },
           {
                type: "ficar em casa",
                content: "Não"
            }
        ]
    },
    
    {
        question: "Já fez quimioterapia?",
        answers: [
            {
                type: "ficar alerta em casa",
                content: "Sim"
            },
           {
                type: "ficar em casa",
                content: "Não"
            }
        ]
    },
    
    {
        question: "Possui hipertensão?",
        answers: [
            {
                type: "ficar alerta em casa",
                content: "Sim"
            },
           {
                type: "ficar em casa",
                content: "Não"
            }
        ]
    },
    
    {
        question: "Possui alguma doença respiratória?",
        answers: [
            {
                type: "ficar alerta em casa",
                content: "Sim"
            },
           {
                type: "ficar em casa",
                content: "Não"
            }
        ]
    },
    
    {
        question: "É fumante?",
        answers: [
            {
                type: "ficar alerta em casa",
                content: "Sim"
            },
           {
                type: "ficar em casa",
                content: "Não"
            }
        ]
    },
    
    {
        question: "Possui alguma doença autoimune?",
        answers: [
            {
                type: "ficar alerta em casa",
                content: "Sim"
            },
           {
                type: "ficar em casa",
                content: "Não"
            }
        ]
    },
    
    {
        question: "Tem a imunidade comprometida/suprimida?",
        answers: [
            {
                type: "ficar alerta em casa",
                content: "Sim"
            },
           {
                type: "ficar em casa",
                content: "Não"
            }
        ]
    },
    
    {
        question: "Fez cirurgia nos últimos 6 meses?",
        answers: [
            {
                type: "ficar alerta em casa",
                content: "Sim"
            },
           {
                type: "ficar em casa",
                content: "Não"
            }
        ]
    },
    
    {
        question: "Teve contato com alguém suspeito de ter a COVID-19?",
        answers: [
            {
                type: "ficar alerta em casa",
                content: "Sim"
            },
           {
                type: "ficar em casa",
                content: "Não"
            }
        ]
    },
    
    {
        question: "Viajou para o exterior nos últimos 2 meses?",
        answers: [
            {
                type: "ficar alerta em casa",
                content: "Sim"
            },
           {
                type: "ficar em casa",
                content: "Não"
            }
        ]
    },
    
    {
        question:"Está com o nariz entupido?",
        answers: [
            {
                type: "fica alerta em casa",
                content: "Sim"
            },
            {
                type: "fica em casa",
                content: "Não"
            },
        ]
    },
    
    {
        question: "Possui cansaço respiratório? (Leve dificuldade para respirar)",
        answers: [
            {
                type: "fica alerta em casa",
                content: "Sim"
            },
            {
                type: "fica em casa",
                content: "Não"
            },
        ]
    },
    
    {
        question: "Tomou algum medicamento para o desconforto respiratório?",
        answers: [
            {
                type: "fica alerta em casa",
                content: "Sim"
            },
            {
                type: "fica em casa",
                content: "Não"
            },
        ]
    },
    
    {
        question: "Mesmo com uso de medicamentos os sintomas persistem?",
        answers: [
            {
                type: "procurar um posto de saúde-3",
                content: "Sim"
            },
            {
                type: "fica em casa",
                content: "Não"
            },
        ]
    },
    
    {
        question: "Está sentindo fadiga, exaustão no corpo, como um cansaço, dores?",
        answers: [
            {
                type: "procurar um posto de saúde",
                content: "Sim"
            },
           {
                type: "ficar em casa",
                content: "Não"
            }
        ]
    },
    
    {
        question: "Está com diarréia?",
        answers: [
            {
                type: "procurar um posto de saúde",
                content: "Sim"
            },
           {
                type: "ficar em casa",
                content: "Não"
            }
        ]
    },
    
    {
        question: "Está com dor de garganta?",
        answers: [
            {
                type: "procurar um posto de saúde",
                content: "Sim"
            },
           {
                type: "ficar em casa",
                content: "Não"
            }
        ]
    },
    
    {
        question: "Está vomitando?",
        answers: [
            {
                type: "fica alerta em casa",
                content: "Sim"
            },
            {
                type: "fica em casa",
                content: "Não"
            },
        ]
    },
    
    {
        question: "Está tomando algum medicamento?",
        answers: [
            {
                type: "ficar alerta em casa",
                content: "Sim"
            },
           {
                type: "fica em casa",
                content: "Não"
            }
        ]
    },
    
    {
        question: "Mesmo com uso de medicamentos os sintomas persistem após 2h?",
        answers: [
            {
                type: "procurar um posto de saúde",
                content: "Sim"
            },
           {
                type: "ficar alerta em casa",
                content: "Não"
            }
        ]
    },
    
    {
        question: "Está com dificuldades de sentir cheiros e/ou sabores?",
        answers: [
            {
                type: "fica alerta em casa",
                content: "Sim"
            },
           {
                type: "ficar em casa",
                content: "Não"
            }
        ]
    },*/
  ];
  
  export default quizQuestions;
