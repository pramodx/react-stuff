import React, {Component} from 'react';

class Search extends Component {
    onSubmit(e){
        e.preventDefault();
        let username = this.refs.username.value.trim();
        if (!username){
            console.log('Enter username you moron');
            return;
        }
        this.props.onFormSubmit(username);
        this.refs.username.value = '';
        console.log('submitted');


    }
    render() {
        return (<div>
            <form onSubmit={this.onSubmit.bind(this)}>
                <label htmlFor="username">Search Github Users</label>
                <input type="text" ref="username" id="username" className="form-control"/>
            </form>
        </div>
        )
    }
}
export default Search;