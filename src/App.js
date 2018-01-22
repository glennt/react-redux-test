import React, { Component } from 'react';
import logo from './logo.svg';
import './scss/index.css';

import { changeView } from './actions/ui'

import ListContainer from './components/containers/ListContainer';
import EditContainer from './components/containers/EditItemContainer'

class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        var currentView;
        if(this.props.ui.view === 'LIST') {
            currentView = <ListContainer/>
        } else if (this.props.ui.view === 'EDIT') {
            currentView = <EditContainer/>
        }

        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <div className="App-nav">
                Nav goes here
            </div>
            <div className="App-main-container">
              {currentView}
            </div>
          </div>
        );
  }
}


export default App;
