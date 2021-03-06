import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { persistStore, autoRehydrate } from 'redux-persist';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
        autoRehydrate(),
    )
)

class AppProvider extends Component{
    constructor(){
        super();
        this.state = { rehydrated: false }
    }

    componentWillMount() {
        persistStore(store, {}, () => {
            this.setState({  rehydrated: true});
        });
    }

    render() {
        if(!this.state.rehydrated) return null;
        return (
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(
    <AppProvider />,
    document.getElementById('root'));
registerServiceWorker();
