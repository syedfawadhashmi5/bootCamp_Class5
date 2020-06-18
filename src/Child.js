import React, { useContext } from 'react'
import CounterContext from './CounterContext'

export default function Child() {
    let CountValue = useContext(CounterContext)
    return (
        <div>
            <h1>this is value of Context {CountValue[0]}</h1>
            <button onClick={() => { CountValue[1](++CountValue[0]) }}>Increment Context</button>
            <button onClick={() => { CountValue[1](--CountValue[0]) }}>DECREMENT Context</button>
        </div>
    )
}
