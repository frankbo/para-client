import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import userReducer from "./redux/UserModule";

function makeStore() {
    const reducers = combineReducers({ userReducer });
    return createStore(reducers, applyMiddleware(thunk));
}
const store = makeStore();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('mount'));
