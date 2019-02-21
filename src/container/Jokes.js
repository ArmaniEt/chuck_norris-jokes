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
        const JOKES_URL = 'https://api.chucknorris.io/jokes/random';
        const N = 5; // amount of jokes
        let chuckJokes = [];

        for (let i = 0; chuckJokes.length < N; i++){
            const promises = fetch(JOKES_URL).then(response => {
                if (response.ok) return response.json();
                throw new Error("Network request is failed");
            });
            chuckJokes.push(promises); // push every promise in a list
        }

        Promise.all(chuckJokes).then(jokes => {
            let receivedJokes = jokes.map(joke => {return{...joke}});

            this.setState({jokes: receivedJokes});
        }).catch(error => {console.log(error)}); // show an error to console
    }


    render(){
        return(
            <div className="jokes__wrapper">
                {this.state.jokes.map(joke => <Joke
                    joke={joke.value} // cause we received an object, we should get a value of this object (joke itself)
                    />
                )}
            </div>
        )
    }


}