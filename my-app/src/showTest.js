import React, { useState} from 'react';

const Text = () => {
    const [ name, setName] = useState("Kim Ei Hyun");
    const nameChange = (e) => setName(e.target.value) ;
    const [ count, setCount] = useState(0);
    const upCount = () => setCount(count + 1);
    const downCount = () => setCount(count - 1);

    return(
        <>
            <p>안녕하세요 {name} 입니다.</p>
            <input onChange={nameChange} />
            <p>{count}번 클릭!</p>
            <button onClick={upCount}>Up</button>
            <button onClick={downCount}>Down</button>
        </>
    )
}


export default Text;