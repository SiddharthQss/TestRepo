import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Test/Event'
//import Ref from './Test/Ref'
import TestHoc from './Test/Hoc'
import  Todos from './pages/Todo'

import registerServiceWorker from './registerServiceWorker';
import Header from "./Component/Header";
import TestRouting from './Routing/Routing'
import Recom from './Recompose/Recompose'

ReactDOM.render(<Recom />
    ,document.getElementById('root'));
