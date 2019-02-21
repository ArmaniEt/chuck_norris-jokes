import React, {Component} from 'react';
import './Jokes.css';
import Joke from "../components/Joke/Joke";

//componentDidMount inside this hook write a response
//created a container for displaying jokes


export default class Jokes extends Component {

    state = {
        jokes: []
    };

    componentDidMount() {

    }


    render(){
        return(
            <div>

            </div>
        )
    }


}