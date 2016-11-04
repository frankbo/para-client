/// <reference path='../typings/index.d.ts'/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ConnectedApp} from './components/App/App'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import userReducer from "./reducers/UserReducer";

function makeStore() {
    const reducers = combineReducers(userReducer);
    return createStore(reducers, applyMiddleware(thunk));
}
const store = makeStore();

ReactDOM.render(<Provider store={store}><ConnectedApp /></Provider>, document.getElementById('mount'));
