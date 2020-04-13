import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './Components/Questions/Quiz';
import Result from './Components/Questions/Result';
import quizQuestions from './Api/quizQuestions';
import logo from './Assets/imgs/logo.png';
import './App.css';

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
      result: ''
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
    this.setUserAnswer(event.currentTarget.value);
    if(this.state.questionId === 7 && currentContent==='Não'){
      //Skipping question eight depending on question seven
      console.log('jump');
      setTimeout(() => this.setNextQuestion(2), 300);
    }else if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
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
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'ficar alerta em casa' });
    }
  }

  renderQuiz() {
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

  render() {
    return (
      <div className="App">

        <div className="Container">
          <div className="App-header row">
            <div className="col-12">
              <a href="index.js"><img src={logo} className="App-logo" alt="logo" /></a>
            </div>
          </div>
        </div>

        {this.state.result ? this.renderResult() : this.renderQuiz()}


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
              <a href="https://covid19-brazil-api.now.sh/" target="_blank" class="btn btn-primary">Dados</a>
            </div>

          </div>
        </div>

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