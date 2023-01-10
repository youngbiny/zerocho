import React, { useState, useRef } from "react";

const ResponseCheckHook = () => {
    const [state, setState] = useState("wating");
    const [message, setMessge] = useState("클릭해서 시작하세요"); 
    const [result,setResult] = useState([]);
    const timeOut = useRef(null);
    const startTime = useRef(0);
    const endTime = useRef(0);

    const onClickScreen = () => {
        if(state === "wating"){
            setState("ready");
            setMessge("초록색이 되면 클릭해주세요");
            timeOut.current = setTimeout(() => {
                setState("now");
                setMessge("지금클릭");
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000);
        } else if (state === 'ready'){ //eslint-disable-line no-unused-vars
            clearTimeout(timeOut.current);
            setState("wating");
            setMessge("너무 성급하시군요. 초록색이 된 후에 클릭하세요");
        } else if (state === 'now'){ //반응속도 체크
            endTime.current = new Date();
            setState("wating");
            setMessge("클릭해서 시작하세요."); //eslint-disable-line no-unused-vars
            setResult((prevResult) => {
                return [...prevResult, endTime.current - startTime.current]
            });
        }
    }

    const onReset = () => {
        setResult([]); //eslint-disable-line no-unused-vars
    }

    const renderAverage = () => {
        return result.length === 0 ? null :
        <>
        <div>평균시간 : {result.reduce((a,c) => a + c) / result.length}ms </div>
        <button onClick={onReset}>리셋</button>
        </>
    }


    return(
        <>
            <div id="screen" className={state} onClick={onClickScreen}>
                {message}
            </div>
            {renderAverage}
        </>
    )
}

export default ResponseCheckHook;