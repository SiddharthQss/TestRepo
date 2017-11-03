import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Test/Event'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Hello/>, document.getElementById('root'));
registerServiceWorker();
