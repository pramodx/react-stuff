import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'pramodx',
            userData: [],
            userRepos: [],
            perPage: 5
        }
    }
    render(){
        return(
            <div>
                My APP
            </div>
        )

    }
}

export default App;