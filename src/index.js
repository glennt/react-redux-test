import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();

