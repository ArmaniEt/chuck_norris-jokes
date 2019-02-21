import React, {Component} from 'react';
import './App.css';
import Jokes from './container/Jokes'


class App extends Component {
    render() {
        return (
            <div className="container">
                <Jokes/>
            </div>
        );
    }
}

export default App;
