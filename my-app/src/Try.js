import React, {memo} from 'react';

const Try = memo( ({ tryinfo }) => {
    return (
        <li>
            <div>{tryinfo.try}</div>
            <div>{tryinfo.result}</div>
        </li>        
    );
});
this.displayName = Try;


export default Try;