import React from 'react';
import Tr from './tr';

const Table = ({onClick,tableData}) => {
    return(
        <table onClick={onClick}>
            {Array(tableData.length).fill().map(() => (<Tr />))}
        </table>
    );
}

export default Table;