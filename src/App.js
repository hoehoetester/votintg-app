import React, { Component } from 'react';
import { voteAngular, voteReact, voteVuejs } from './actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.handleVoteAngular = this.handleVoteAngular.bind(this);
    this.handleVoteReact = this.handleVoteReact.bind(this);
    this.handleVoteVuejs = this.handleVoteVuejs.bind(this);
  }
  handleVoteAngular() {
    console.log('angular clicked');
    this.store.dispatch(voteAngular());
  }
  handleVoteReact() {
    console.log('react clicked');
    this.store.dispatch(voteReact());
  }
  handleVoteVuejs() {
    console.log('vue clicked');
    this.store.dispatch(voteVuejs());
  }
  render() {
    return (
      <div className="App">
        <div className="jumbotron text-center rounded-0">
          <h2>What is your favorite front-end framework?</h2>
          <h4>Click on the logos below to vote!</h4>
          <br />
          <div className="row justify-content-around t-item-row">

            <div className="col-sm-2" onClick={this.handleVoteAngular}>
              <span>
                <img src="./images/angular_logo.png" alt="angular" />
                <div>Angular</div>
              </span>
            </div>

            <div className="col-sm-2" onClick={this.handleVoteReact}>
              <span>
                <img src="./images/react_logo.png" alt="react" />
                <div>React</div>
                </span>
            </div>

            <div className="col-sm-2" onClick={this.handleVoteVuejs}>
              <span>
                <img src="./images/vuejs_logo.png" alt="vuejs" />
                <div>Vuejs</div>
                </span>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
