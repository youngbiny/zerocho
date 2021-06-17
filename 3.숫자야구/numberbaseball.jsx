const React = require('react');
const { Component } = require('react');

class Numberbaseball extends Component {
    state = {
        result : '',
        value : '',
        answer : getNumber(),
        tries : [],
    };

    onSubmitForm = () => {

    };

    onChnageInput = () => {

    };

    render(){
        return(
            <>
                <h1>{this.state.resulte}</h1>
                <form onSubmit = {this.onSubmitForm}>
                    <input maxLength={4} value={this.value} onChange = {this.onChangeInput} />
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                    {[].map(() => {
                        return(
                            <li>like</li>
                        );
                    })}
                </ul>
            </>
        );
    };
}

export default Numberbaseball;