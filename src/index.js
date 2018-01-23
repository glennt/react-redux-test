import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux'
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();

