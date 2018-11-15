import React, { Component } from 'react';
import GithubService from './services/github.service';
import UserSearch from './components/user-search/user-search.component';
import UserInfoCard from './components/user-info-card/user-info-card.component';

class App extends Component {

  githubService;

  constructor(props){
    super(props);
 
    this.state = {
      currentUser: null,
      userIsLoading: false,
      userError: null
    }
  }

  componentWillMount(){
    this.githubService = new GithubService();
  }

  async userSearch(username){

    if(this.state.currentUser && username.toLowerCase() === this.state.currentUser.login){
      return;
    }

    this.setState({userError: null, currentUser: null, userIsLoading: null});

    if(!username){
      return;
    }

    try {
      const response = await this.githubService.getUser(username);
      const user = await response.json();
      this.setState({currentUser: user, userIsLoading: false});
    } catch (error) {
      console.warn(error);
      this.setState({
        userIsLoading: false,
        userError: 'Sorry, unable to find user'
      });
    }
  }

  renderCard(){
    if(this.state.userIsLoading) {
      return <h1>Loading...</h1>;
    }

    if(this.state.userError){
      return <h1>{this.state.userError}</h1>
    }

    if(this.state.currentUser){
      return <UserInfoCard user={this.state.currentUser}/>
    }
  }

  render() {
    return (
      <section className="main-section">
        <h1>Immersive Technical Challenge</h1>
        <UserSearch search={(name) => this.userSearch(name)}/>

        <div className="output-area">
          {this.renderCard()}
        </div>

      </section>
    );
  }
}

export default App;
