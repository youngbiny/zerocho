import React, { useReducer } from 'react';

function init(initalState){
    return { count:initalState};
}

function reducer(state, action){
    switch (action.type){
        case "INCREMENT" :
            return { count : state.count + action.payload };
        case "DECREMENT" :
            return { count : state.count - action.payload };
        case "RESET" :
            return init(action.payload);
        default :
            throw new Error("unsupported action type : ", action.type);
    }
}

const Counter = ({initialCount}) => {
    const [state, dispatch] = useReducer(reducer, initialCount, init);

    return(
        <>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch({type : "RESET",payload:0})}>초기화</button>
            <button onClick={() => dispatch({type : "INCREMENT", payload: 1})}>증가</button>
            <button onClick={() => dispatch({type : "DECREMENT", payload: 1})}>감소</button>
            <button onClick={() => dispatch({type : "KKKKKKKKK", payload: 1})}>에러</button>
        </>
    )
};

export default Counter;