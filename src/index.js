import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import Home from './index.jsx';
import Home from './home.jsx';

import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

ReactDOM.render(<Home />, document.getElementById('root'));

serviceWorker.unregister();

