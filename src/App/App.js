import React, {Component} from 'react';
import {Router} from 'react-router-dom';
import {history} from "../_data/store/history";
import MainLayout from '../components/MainLayout/MainLayout'

class App extends Component {
    render() {
        return (
            <Router history={history}>
                    <MainLayout/>
            </Router>
        );
    }
}

export default App;
