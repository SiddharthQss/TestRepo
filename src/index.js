import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Test/Event'
//import Ref from './Test/Ref'
import TestHoc from './Test/Hoc'
import Layout from './Component/Layout'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Layout/>, document.getElementById('root'));
registerServiceWorker();
