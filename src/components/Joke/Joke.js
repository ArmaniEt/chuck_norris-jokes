import React from 'react';
import './Joke.css';


const Joke = function (props) {
    return(
        <div className="block__joke">
            <p className="block__joke-text">{props.joke}</p>
        </div>
    )

};

export default Joke;