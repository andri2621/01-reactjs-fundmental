import React, { Component } from 'react';

class Counter extends Component {

    constructor() {
        super();
        this.state={
            counter:0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    
    increment() {
        // hanya method this.setState yg bisa modif state
        this.setState({
            counter: this.state.counter+5
        })
    }

    decrement() {
        // hanya method this.setState yg bisa modif state
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <div>
                <h3>Counter</h3>
                <h2>Count: {this.state.counter}</h2>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}

export default Counter;