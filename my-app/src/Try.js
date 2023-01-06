import React from 'react';

const Try = ({ tryinfo }) => {
    return (
        <li>
            <div>{tryinfo.try}</div>
            <div>{tryinfo.result}</div>
        </li>        
    )
}


export default Try;