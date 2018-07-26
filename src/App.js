import React, { Component } from 'react';
import logo from './logo.svg';
import './scss/index.css';

import { changeView } from './actions/ui'

import NavContainer from './components/containers/NavContainer';
import ListContainer from './components/containers/ListContainer';
import EditContainer from './components/containers/EditItemContainer';
import LoadedItemContainer from './components/containers/LoadedItemContainer';

class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        var currentView;
        if(this.props.ui.view === 'LIST') {
            currentView = <ListContainer/>
        } else if (this.props.ui.view === 'LOADED_ITEM') {
            currentView = <LoadedItemContainer/>
        }

        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <div className="App-nav">
                Current View: {this.props.ui.view}
                <NavContainer/>
            </div>
            <div className="App-main-container">
              {currentView}
            </div>
              <a href="http://localhost:5000/redirect" target="_blank">Redirect</a>
          </div>
        );
  }
}


export default App;
