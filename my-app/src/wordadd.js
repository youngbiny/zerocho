import React, { useState, useRef } from 'react';

const WordRelay = () => {
    const [word, setWord] = useState("김영빈");
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(word[word.length - 1] === value[0]){
            setWord(value);
            setResult("딩동댕");
            setValue("");
            inputRef.current.focus();
        }else{
           setResult("오답");
           setValue("");
           inputRef.current.focus();
        }
    }

    const onChageInput = (e) => {
        setValue(e.target.value);
    }    

    return(
        <div>
            <p>{word}</p>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} onChange={onChageInput} value={value} />
                <button>전송</button>
            </form>
            <p>{result}</p>
        </div>
    );
};


export default WordRelay;