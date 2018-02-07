import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';  
import configureStore from './store/configureStore';

// Initialize store
const store = configureStore();

ReactDOM.render(
	<Provider store={store}>	
		<Router history={browserHistory} routes={routes} />
		</Provider>,
		document.getElementById('root')
	);