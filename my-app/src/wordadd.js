import React, {useState, useRef} from 'react';

const WordRelay = () => {
    const [word,setWord] = useState("김영빈");
    const [result,setResult] = useState("");
    const [value,setValue] = useState("");
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(word[word.length - 1] === value[0]){
            setWord(value);
            setResult("딩동댕 :" + word);
            setValue("");
            inputRef.current.focus();
        }else{
            setResult("땡");
            setValue("");
            inputRef.current.focus();
        }
    }

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    return(
        <div>
            <p>{word}</p>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} onChange={onChangeInput} value={value}  />
                <button>입력</button>
            </form>
            <p>{result}</p>
        </div>
    )
}

export default WordRelay;