import React, {Component} from 'react';
import './Jokes.css';
import Joke from "../components/Joke/Joke";
import Button from "../components/Button/Button";

//componentDidMount inside this hook write a response
//create a container for displaying jokes


export default class Jokes extends Component {

    state = {
        jokes: []
    };

    componentDidMount() {
        this.getJokes();

    }

    getJokes = () => {

        const JOKES_URL = 'https://api.chucknorris.io/jokes/random';
        const N = 3; // amount of jokes
        let chuckJokes = [];

        for (let i = 0; chuckJokes.length < N; i++){
            const promise = fetch(JOKES_URL).then(response => {
                if (response.ok) return response.json();
                throw new Error("Network request is failed");
            });
            chuckJokes.push(promise); // push every promise in a list
        }

        Promise.all(chuckJokes).then(jokes => {
            let receivedJokes = jokes.map(joke => {return{...joke}});

            this.setState({jokes: receivedJokes});
        }).catch(error => {console.log(error)}); // show an error to console
    };


    render(){
        return(
            <div className="jokes__wrapper">
                <Button
                    jokesOnChange={this.getJokes}
                />
                {this.state.jokes.map(joke => <Joke
                    key={joke.id}
                    joke={joke.value} // cause we received an object, we should get a value of this object (joke itself)
                    />
                )}
            </div>
        )
    }


}