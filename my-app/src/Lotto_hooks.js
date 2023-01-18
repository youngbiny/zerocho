import React, { useState,useRef, useEffect, useMemo } from "react";
import Ball from './ball';

function getWinNumber(){
    console.log();
    const candidate = Array(45).fill().map((v,i) => i + 1);
    const shuffle = [];
    while(candidate.length > 0){
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumber = shuffle.slice(0,6).sort((p,c) => p - c );
    return [...winNumber, bonusNumber];
}

const Lotto = () => {
    const lottoNumbers = useMemo(() => getWinNumber(), [])
    const [winBalls,setwinBalls] = useState([]);
    const [winNumbers,setWinNumbers] = useState(lottoNumbers);
    const [bonus,setBonus] = useState(null);
    const [redo,setRedo] = useState(false);
    const timeouts = useRef([]);

    useEffect(() => {
        for(let i=0; i < winNumbers.length -1;i++){
            timeouts.current[i] = setTimeout(() =>{
                setwinBalls((preBalls) => [...preBalls, winNumbers[i]]);
            }, (i+1)*1000);
        };
        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000);
        return() => {
            timeouts.current.forEach((v) => {
                clearTimeout(v);
            });
        };
    },[timeouts.current])

    const onclickRedo = () => {
        setWinNumbers(getWinNumber());
        setwinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    };

    return(
        <>
            <div>당첨숫자</div>
            <div id='결과창'>
                {winBalls.map((v)=> <Ball key={v} number={v} />)}
            </div>
            <div>보너스!</div>
            {bonus && <Ball number={bonus} />}
            {redo && <button onclick={onclickRedo}>한번 더</button>}
        </>
    );
}


export default Lotto;