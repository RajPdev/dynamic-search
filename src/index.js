import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { createLogger } from 'redux-logger';
import App from './containers/App';
import thunkMiddleware from 'redux-thunk';
import 'tachyons'; 
import { searchMonsters, requestMonsters } from './reducers'

const logger = createLogger();
const rootReducer = combineReducers({searchMonsters, requestMonsters});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render( 
	<Provider store ={store}>
	<App />
	</Provider>
	,document.getElementById('root'));

registerServiceWorker();
  