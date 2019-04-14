import React, { Component } from "react";
import Button from "./Components/Button";
import Card from "./Components/Card";
import { getUserDetails } from "./UserDataAction";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }
  setValue = evt => {
    this.setState({ value: evt.target.value });
  };
  getData = () => {
    if(this.state.value === ''){
      alert('Please enter a user name');
    }else
    {
    this.props.dispatch(getUserDetails(this.state.value));
    }
  };
  getCardData = () => {
    if (this.props.userData) {
      return <Card image={this.props.userData.avatar_url}>
              <h3>{this.props.userData.name}</h3>
              <p>{this.props.userData.bio}</p>
              <p>{this.props.userData.company}</p>
              <p>{this.props.userData.location}</p>
      </Card>;
    }else if(this.props.error)
    {
      return <h3>User not found!!</h3>;
    }
    return null;
  };
  render() {
    return (
      <React.Fragment>
        <input type="text" onChange={this.setValue} value={this.state.value} />
        <Button onClick={this.getData}>Test</Button>
        {this.getCardData()}
      </React.Fragment>
    );
  }
}

const mapStatetoProps = state => ({
  userData: state.user.data,
  error:state.user.error
});

export default connect(mapStatetoProps)(App);
