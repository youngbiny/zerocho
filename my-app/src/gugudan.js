import React, { useState, useRef } from 'react';

const Gugudan = () => {
    const [ first, setFirst ] = useState(Math.ceil(Math.random() * 9));
    const [ second, setSecond ] = useState(Math.ceil(Math.random() * 9));
    const [ value, setValue ] = useState("");
    const [ result, setResult ] = useState("");
    const inputRef = useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }
    const onSubmitInput = (e) => {
        e.preventDefault();
        if(parseInt(value) === first * second){
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setResult("정답 :" + value);
            setValue("");
            inputRef.current.focus();
        }else{
            setResult("오답입니다.");
            setValue("");
            inputRef.current.focus();
        }
    }    
    console.log('렌더링');
    return(
        <>
            <p>{first} 곱하기 {second} 는?</p>
            <form onSubmit={onSubmitInput}>
                <input ref={inputRef} onChange={onChangeInput} value ={value} />
                <button>입력</button>
            </form>
            <p>{result}</p>
        </>
    )
}


export default Gugudan;