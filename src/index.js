import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import App from './App/App';
import {store} from "./_data/store/store";

import './index.css';
import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
