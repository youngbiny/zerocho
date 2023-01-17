import React, { useState,useReducer } from 'react';
import Table from './table';

const initalState = {
    winner:'',
    turn: '0',
    tableData: [['','',''],['','',''],['','','']],
}

const SET_WINNER = 'SET_WINNER';

const reducer = () => {
    switch(action.type){
        case 'SET_WINNER':
            return{
                ...state,
                winner : action.winner,
            }
    }
}

const TicTacTok = () => {
    const [state, dispatch] = useReducer(reducer, initalState);

    const onClickTable = useCallback( () => {
        dispatch({type:SET_WINNER ,winner:'0'});
    }, []) 

    //const [winner,setWinner] = useState();
    //const [turn,setTurn] = useState();
    //const [tableData,setTableData] = useState([[,,],[,,],[,,]]);

    return(
        <>
            <Table onClick = {onClickTable} tableData = {state.tableData} />
            {state.winner && <div>[winner]님의 승리</div>}
        </>
    );
}

export default TicTacTok;