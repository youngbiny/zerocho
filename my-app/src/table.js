import React from 'react';
import Tr from './tr';

const Table = ({onClick,tableData}) => {
    return(
        <table>
            {Array(tableData.length).fill().map((tr, i) => (<Tr rowIndex={i} rowData = {tableData[i]}/>))}
        </table>
    );
}

export default Table;