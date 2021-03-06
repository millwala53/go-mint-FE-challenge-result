import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
const store = configureStore();


ReactDOM.render((
	  <Provider store={store}>
      <BrowserRouter>
      	<App />
    	</BrowserRouter>
    </Provider>
	), document.getElementById('root'));

registerServiceWorker();
