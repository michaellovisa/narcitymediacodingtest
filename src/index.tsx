import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppRouter } from './router';
import { rootReducer } from './reducers';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<AppRouter/>
	</Provider>
	, document.getElementById('root'));