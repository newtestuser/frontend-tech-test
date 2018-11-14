import React, {Component} from 'react';

class UserSearch extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: ''
        }
        this.handleInputChange.bind(this);
    }

    timeoutReference = null;

    searchForUser(username){
        this.props.search(username);
    }

    handleInputChange(ev){
        const { value } = ev.target;
        this.setState({username: value}, () => {
            if(this.timeoutReference !== null) {
                clearTimeout(this.timeoutReference);
                this.timeoutReference = null;
                this.timeoutReference = setTimeout(() => this.searchForUser(this.state.username), 500);
            } else {
                this.timeoutReference = setTimeout( () => this.searchForUser(this.state.username), 500);
            }
        });
    }

    render() {
        return (
            <div className="search-container">
                <input
                    className="user-search"
                    type="text"
                    value={this.state.username}
                    onChange={(ev) => this.handleInputChange(ev)}
                    onBlur={(ev) => this.handleInputChange(ev)}
                    placeholder="Octocat"
                />
            </div>
        )
    }

}
export default UserSearch;