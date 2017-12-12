import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Refugees from './Refugees';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Refugees />, document.getElementById('root'));
registerServiceWorker();