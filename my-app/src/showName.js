import React, { useState } from 'react';

const ShowName = () => {
    const [ count, setCount ] = useState(0);
    const [ name, setName] = useState("Kim Ei Hyun");
    const [ name1, setName1 ] = useState("Ei Sol");
    const countUp = () => setCount(count + 1);
    const countDown = () => {
        if(count > 0)setCount(count - 1)
    };
    const handleChangeName = (e) => setName(e.target.value);
    const changeName = () => setName1( name1 === "Ei Sol" ? "Yeo Rm" : "Ei Sol") ;

    return(
        <div>
            <p>안녕하세요. {name} 입니다.</p>
            <p>안녕하세요. {name1} 입니다.</p>
            <input onChange={handleChangeName} />
            <p>{count}번 클릭!</p>
            <button onClick={countUp}>Up</button>
            <button onClick={countDown}>Down</button>
            <button onClick={changeName}>change</button>
        </div>
    );
};

export default ShowName;