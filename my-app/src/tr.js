import React from 'react';
import Td from './td';

const Tr = ( {rowData, rowIndex} ) => {
    return(
        <tr>
            {Array(rowData.length).fill().map((td,i) => (<Td rowIndex={rowIndex} cellIndex={i}>''</Td>))};
        </tr>
    );
}

export default Tr;