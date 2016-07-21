import React, {Component} from 'react';

class Results extends Component {
    render(){
        var score = this.props.score;
        var total = this.props.questions.length;
        var percent = score / total * 100;
        var message;
        if (percent > 80){
            message = 'Awesome Job';
        } else if (percent > 60 && percent < 80) {
            message = 'Not bad'
        } else {
            message = 'You need to try again'
        }
        return(
            <div className="well">
                <h4>You got {score} out of {total}</h4>
                <h1>{percent}% - {message}</h1>
                <hr/>
                <a href="/app">Take Again</a>
            </div>
        )
    }
}

export default Results;