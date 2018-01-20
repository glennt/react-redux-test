import React, { Component } from 'react';
import logo from './logo.svg';
import './scss/index.css';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeView } from './actions/ui'

import ListContainer from './components/containers/ListContainer';
import EditContainer from './components/containers/EditContainer'

const mapStateToProps = state => {
    return { ui: state.ui };
};

const mapDispatchToProps = dispatch => {
    return {
        changeView: view => {
            dispatch(changeView(view))
        }
    }
}

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
              {currentView}
          </div>
        );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
