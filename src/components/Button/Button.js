import React, {PureComponent} from 'react';
import './Button.css';

export default class Button extends PureComponent {
    render() {
        return (
            <div className="generator">
                <button onClick={this.props.jokesOnChange} type="button" className="generator__button">Generate new jokes</button>
            </div>
        )
    }
}