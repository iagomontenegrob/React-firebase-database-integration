import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css'
import './statics/css/index.css';
import './statics/css/App.css';
import './statics/css/login.css';
import './statics/css/table.css';

import App from './components/App';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
