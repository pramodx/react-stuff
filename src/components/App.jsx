import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/profile.jsx';
import Search from'./github/search.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'pramodx',
            userData: [],
            userRepos: [],
            perPage: 10
        }
    }

    // Get user data from github
    getUserData() {
        $.ajax({
            url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
            datatype: 'json',
            cache: false,
            success: function (data) {
                this.setState({userData: data})
            }.bind(this),
            error: function (xhr, status, err) {
                this.setState({username: null})
                alert(err)
            }.bind(this)
        })
    }

    // Get user repos from github
    getUserRepos() {
        $.ajax({
            url: 'https://api.github.com/users/' + this.state.username + '/repos?per_page=' + this.state.perPage + '&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sort=created',
            datatype: 'json',
            cache: false,
            success: function (data) {
                this.setState({userRepos: data})

            }.bind(this),
            error: function (xhr, status, err) {
                this.setState({username: null})
                alert(err)
            }.bind(this)
        })
    }

    handleFormSubmit(username){
        this.setState({username: username}, function(){
            this.getUserData();
            this.getUserRepos();
        });
    }

    componentDidMount() {
        this.getUserData();
        this.getUserRepos();
    }

    render() {
        return (
            <div>
                <Search onFormSubmit = {this.handleFormSubmit.bind(this)} />
                <Profile {...this.state}/>
            </div>
        )

    }
}
App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
}
App.defaultProps = {
    clientId: '060a51804660f2469473',
    clientSecret: 'acdb02b9ea4310348eb7be8b8a7fef391a1d7601'
}
export default App;