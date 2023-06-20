import React, { useReducer } from 'react'

type ReducerState = {
    count: number
}
type ValueAction = {
    type: 'increment' | 'decrement'
    payload: number
}
type ResetAction = {
    type: 'reset'
}
type ReducerAction = ValueAction | ResetAction

const initialState = { count: 0 }

const reducer = (state: ReducerState, action: ReducerAction) => {
    switch(action.type) {
        case 'increment': 
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset': 
            return initialState
        default:
            return state
    }
}

function ReducerCounter() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>{state.count}</div>
            <button onClick={() => dispatch({type: "increment", payload: 1})}>Increment</button>
            <button onClick={() => dispatch({type: "decrement", payload: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>
        </div>
    )
}   

export default ReducerCounter