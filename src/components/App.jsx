import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/questionList.jsx';
import ScoreBox from './quiz/scoreBox.jsx';
import Results from './quiz/results.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {
                    id: 1,
                    text: 'Whats your name',
                    choices: [
                        {
                            id: 'a',
                            text: 'Pasquale'
                        },
                        {
                            id: 'b',
                            text: 'Pramod'
                        },
                        {
                            id: 'c',
                            text: 'Vijay Dinanath Chauhan'
                        }
                    ],
                    correct: 'b'
                },
                {
                    id: 2,
                    text: 'Dogs name',
                    choices: [
                        {
                            id: 'a',
                            text: 'Bruno'
                        },
                        {
                            id: 'b',
                            text: 'Mars'
                        },
                        {
                            id: 'c',
                            text: 'Mojo'
                        }
                    ],
                    correct: 'c'
                },
                {
                    id: 3,
                    text: 'First Kids name',
                    choices: [
                        {
                            id: 'a',
                            text: 'Adi'
                        },
                        {
                            id: 'b',
                            text: 'Gauri'
                        },
                        {
                            id: 'c',
                            text: 'Pasquale'
                        }
                    ],
                    correct: 'b'
                },
                {
                    id: 4,
                    text: '2nd kids name',
                    choices: [
                        {
                            id: 'a',
                            text: 'Adi'
                        },
                        {
                            id: 'b',
                            text: 'Guttings'
                        },
                        {
                            id: 'c',
                            text: 'Robert'
                        }
                    ],
                    correct: 'a'
                }
            ],
            score: 0,
            current: 1
        }
    }

    setCurrent(current){
        this.setState({current})
    }

    setScore(score){
        this.setState({score})
    }

    render() {
        var scorebox, results;
        if (this.state.current > this.state.questions.length){
            scorebox = null;
            results = <Results {...this.state}/>
        } else {
            scorebox = < ScoreBox {...this.state} />;
            results = null;
        }
        return (
            <div>
                {scorebox}
                < QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)}/>
                {results}
            </div>
        )
    }
}

export default App;