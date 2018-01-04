import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { doStuff } from './actions'


const mapStateToProps = state => {
    return { stuffs: state.stuffs };
};

const mapDispatchToProps = dispatch => {
    return {
        doStuff: text => {
            dispatch(doStuff(text))
        }
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    render() {

    var list = this.props.stuffs.map((item) => {
        return <div>{item.text}</div>
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
            <input type="text" value={this.state.text} onChange={this.handleChange.bind(this)}/>
            <input type="button" value="Add" onClick={this.handleAdd.bind(this)}/>
        </div>
          <div>
              List of stuff
              <div>
                  {list}
              </div>
          </div>
      </div>
    );
  }


  handleChange(e) {
      this.setState({ text: e.target.value });
  }

  handleAdd(e) {
      this.props.doStuff(this.state.text);
      this.setState({ text: ''});
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(App);
