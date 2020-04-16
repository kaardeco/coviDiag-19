import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './Components/Questions/Quiz';
import Result from './Components/Questions/Result';
import quizQuestions from './Api/quizQuestions';
import logo from './Assets/imgs/logo.png';
import './App.css';
import Credits from './Components/Questions/Credits';
import HomeScreen from './Components/Questions/HomeScreen';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: '',
      mainsSymptoms: {
        persistentFever: false,
        dyspnea: false,
        advancedAge: false,
        persistentCough: false,
        isPregnant: false,
        isPregnant3: false,
        coryza : false,
      },
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {

    let currentContent = event.currentTarget.labels[0].firstChild.data;//content of input radio
    var currentQuestion = quizQuestions[this.state.counter].question;
    var currentState = this.state.mainsSymptoms;
    this.setUserAnswer(event.currentTarget.value);

    switch (currentQuestion) {
      case "Qual o seu sexo?":
        if(currentContent === "Masculino") setTimeout(() => this.setNextQuestion(2), 300);
        break;
      case "É gestante?":
        if(currentContent === "Não") setTimeout(() => this.setNextQuestion(1), 300);
        if(currentContent === "Sim") currentState.isPregnant = true;
        break;
      case "Em qual trimestre de gestação?":
        if(currentContent === "3º Trimestre") currentState.isPregnant3 = true;
        break;
      case "Qual sua idade?":
        if(currentContent === "Mais de 60 anos") currentState.advancedAge = true;
        break;
      case "Você está sentindo febre?":
        if(currentContent === "Não") setTimeout(() => this.setNextQuestion(2), 300);
        else if(currentContent === "Sim, há mais de dois dias") currentState.persistentFever = true;
        break;
      case "Tomou algum medicamento para febre?":
        if(currentContent === "Não") setTimeout(() => this.setNextQuestion(1), 300);
        break;
      case "Mesmo com uso de medicamentos os sintomas persistem após 2h?":
        if(currentContent === "Sim") currentState.persistentFever = true;
        break;
      case "Está sentindo falta de ar, com dor ou pressão no peito?":
        if(currentContent === "Sim") currentState.dyspnea = true;
        break;
      case "Está com coriza?":
        if(currentContent === "Sim" || "Sim, há mais de dois dias") currentState.coryza = true;
        break;
      case "Você está tossindo? (Tosse seca ou cheia)":
        if(currentContent === "Sim" || "Sim, há mais de dois dias") currentState.persistentCough = true;
        break;
      default:
        setTimeout(300);
        break;
    }
    console.log(currentState);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setRecomendation() {
    var countRecomendation = 0;
    var currentState = this.state.mainsSymptoms;

    for (var item in currentState) {
      if(currentState[item] === true){
        countRecomendation+=1;
      }
    }

    console.log(countRecomendation);
      //Individuo sintomas leves
      if (countRecomendation === (1 || 2) && currentState.advancedAge === true)
        return "Olá, você apresenta informações sugestivas de COVID-19, mas devido a não haver sintomas, ou da forma mais leve possível, a recomendação da OMS e Ministério da Saúde é ficar em casa e permanecer em isolamento.";
      //Gestante sintomas leves
      else if (countRecomendation === 2 && currentState.isPregnant === true)
        return "Oi! Você se queixa de desconfortos que para o momento não forçam você a ir a um serviço de saúde. A recomendação é que você entre em contato com seu obstetra ou profissional que tem acompanhado o seu pré-natal e observar se os sintomas persistem ou se agravam.";
      else if (countRecomendation === 2 && currentState.isPregnant === false && currentState.advancedAge === false)
        return "Olá, segundo suas queixas, você pode estar apresentando sintomas de COVID-19, mas eles se caracterizam como leves e seria mais exposição se você saísse de casa. Recomendamos você ficar em casa, observando os sintomas. Se eles persistirem e se agravarem, entre em contato com os serviços de saúde. Por enquanto, fique em casa e observe. Tome muito líquido, repouso e intensifique as medidas de isolamento."
      //Individuo sintomas moderados
      else if (countRecomendation === (2 || 3) && (currentState.persistentFever, currentState.dyspnea === true))
        return "Veja bem, você apresenta sintomas que requerem atenção, como falta de ar e febre persistente. Você deve se dirigir a um serviço de saúde, no caso, à Unidade de Pronto-Atendimento (UPA).";
      //   indivíduo com sintomas moderados
      else if (countRecomendation === 3 && (currentState.persistentFever === true && currentState.persistentCough=== true && currentState.coryza === true))
        return "Olá, segundo suas queixas, você pode estar apresentando sintomas de COVID-19, mas eles se caracterizam como moderados (coriza + febre + tosse). Observando os sintomas, recomendamos que você se encaminhe a uma Unidade Básica de Saúde ou Posto de Saúde. Tome muito líquido, fique de repouso e adote medidas de isolamento";
      else if (countRecomendation === 3 && (currentState.persistentFever === true && currentState.isPregnant3 === true && currentState.dyspnea === true))
        return "Então, devido a você estar no terceiro trimestre de gestação, seus sintomas podem ser sugestivos de COVID-19. Recomendamos você entrar em contato com seu(sua) obstetra ou profissional que tem acompanhado o seu pré-natal e se encaminhe para uma Unidade de Pronto-Atendimento (UPA).";
      else if (countRecomendation === 4 || countRecomendation === 5 || countRecomendation === 6){ 
        if (currentState.isPregnant3 === true) 
          return "Então, devido a você estar no terceiro trimestre de gestação, seus sintomas podem ser sugestivos de COVID-19. Recomendamos você entrar em contato com seu(sua) obstetra ou profissional que tem acompanhado o seu pré-natal e se encaminhe para uma Unidade de Pronto-Atendimento (UPA).";
        else if (currentState.advancedAge === true)
          return "Veja bem, você apresenta sintomas que requerem atenção, como falta de ar e/ou febre persistente. Você deve se dirigir a um serviço de saúde, no caso, à Unidade de Pronto-Atendimento (UPA)."
        else
          return "Veja bem, você apresenta sintomas que requerem atenção, como falta de ar e/ou febre persistente. Você deve se dirigir a um serviço de saúde, no caso, à Unidade de Pronto-Atendimento (UPA)."
      }
      else 
        return "Oi, devido a não haver sintomas, ou da forma mais leve possível, a recomendação da OMS e Ministério da Saúde é ficar em casa e permanecer em isolamento."  
  }

  setUserAnswer(answer) {
    //takes a response from the user
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  setNextQuestion(step=1) {
    const counter = this.state.counter + step;
    const questionId = this.state.questionId + step;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    var recomendation = this.setRecomendation();
    this.setState({ result: recomendation });
  }

  renderHomeScreen(){
    return <HomeScreen />
  }

  renderQuiz() {
    this.renderHomeScreen();
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  renderCredits(){
    return <Credits/>
  }

  render() {
    return (
      
      <div className="App">
        <HomeScreen/>
        <div className="Container">
          <div className="App-header row">
            <div className="col-12">
              <a href="index.js"><img src={logo} className="App-logo" alt="logo" /></a>
            </div>
          </div>
        </div>

        {this.state.result ? this.renderResult() : this.renderQuiz()}

        <div className="container">
          <div className="row fixed-bottom">
            <div className="copyright col-12 ">
              &copy; Idealizado pelo GES-UERN
              </div>
          </div>
        </div>

      </div >
    );
  }
}

export default App;