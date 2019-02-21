import React, {Component} from 'react';
import './Button.css';

export default class Button extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return nextProps === this.props;
    }

    render() {
        return (
            <div className="generator">
                <button onClick={this.props.jokesOnChange} type="button" className="generator__button">Generate new jokes</button>
            </div>
        )
    }
}