import Try from "./Try";
const React = require('react');
const { Component } = require('react');
function getNumbers(){ //숫자4개를 랜덤하게 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0;i < 4; i++){
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

class Numberbaseball extends Component {
    state = {
        result: "",
        value: "",
        answer : getNumbers(),
        tries : [],
    };

    fruits = [{id:0 , fruit:'like', taste:'맛있다'}, {id:1 ,fruit:'사과',  taste:'맛있다'},{id:2 ,fruit:'바나나',  taste:'맛있다'},{id:3 ,fruit:'바나나',  taste:'맛있다'}];

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.value === this.state.answer.join('')){
            this.setState({
                result: "홈런",
                tries : [...this.state.tries, {try: this.state.value, result : "홈런!"}],
            })
        }else{
            const answerArray = 
        }
    };

    onChnageInput = (e) => {
        this.setState({
            value: e.target.value,
        });
        
    };

    render(){
        return(
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} onChange={this.onChnageInput} value={this.state.value} />
                    <button>입력</button>
                </form>
                <p>시도 : {this.state.tries.length}</p>
                <ul>
                    {this.fruits.map((v, i) => {
                        return(
                            <Try key={v.id} v={v} i={i} />
                        );
                    })}
                </ul>
            </>
        )
    };
}

export default Numberbaseball;