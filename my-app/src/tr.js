import React from 'react';
import Td from './td';

const Tr = ( {rowData} ) => {
    return(
        <tr>
            {Array(rowData.length).fill().map(() => (<Td/>))};
        </tr>
    );
}

export default Tr;