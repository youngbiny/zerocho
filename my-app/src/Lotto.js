import React, { Component } from "react";
import Ball from '/ball';

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

class Lotto extends Component {
    state = {
        winNumbers: getWinNumber(),
        winBalls: [],
        bonus: null,
        redo: false,
    };
    timeouts = [];
    runTimeout = () => {
        for(let i=0; i < this.state.winNumbers.length -1;i++){
            this.timeouts[i] = setTimeout( (prevState) => {
                return{
                winBalls: [...prevState.winBalls, winBalls[i]],
                };
            }, (i+1)*1000);
        };
        this.timeouts[6] = setTimeout( () => {
            this.setState({
                bonus : winNumbers[6],
                redo:true,
            });
        }, 7000);
    }
    componnetDidMount(){
        this.runTimeout();
    }
    componentDidUpdate(prevProps, prevState){
        if(this.winBalls.length === 0) {
            this.runTimeout();
        }
    }
    componentWillUnmount(){
        this.timeouts.forEach((v) => {
            clearInterval(v);
        });
    }
    onClickRedo = () => {
        this.setState({
            winNumbers: getWinNumber(),
            winBalls: [],
            bonus: null,
            redo: false,
        })
        this.timeouts = [];
    }

    render(){
        return(
            <>
                <div>당첨숫자</div>
                <div id='결과창'>
                    {winBalls.map((v)=> <Ball key={v} number={v} />)}
                </div>
                <div>보너스!</div>
                {bonus && <Ball number={bonus} />}
                {redo && <button onclick={this.onclickRedo}>한번 더</button>}
            </>
        )
    }
}

export default Lotto;