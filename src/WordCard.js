import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import _, { attempt } from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}


export default function Wordcard(props) {

    const  [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = (c) => {
        console.log(`${c} has been activated.`)
        let guess = state.guess + c
        setState({...state, guess})
        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('yeah!')
                setState({...state, guess: '', completed: true})
            }else{
                console.log('You lose '+ state.attempt +', reset')
                setState({...state, guess: '', attempt: state.attempt + 1})
            }
        }
    }

    return(
        <div>
            {
                state.chars.map((c, i) => 
                    <CharacterCard value={c} key={i} attempt={state.attempt} activationHandler={activationHandler}/>
                )
            }
        </div>
    )
}