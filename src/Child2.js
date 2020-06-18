import React, { useReducer } from 'react';
import { ConterReducer } from './CounterReducer';

export default function Child2() {
    let [state, dispatch] = useReducer(ConterReducer, 10);
    return (
        <div>
            <h1>this is value of Reducer {state}</h1>
            <button onClick={() => dispatch('INCREMENT')}>Increment Reducer</button>
            <button onClick={() => dispatch('DECREMENT')}>Decrement Reducer</button>
        </div>
    )
}
