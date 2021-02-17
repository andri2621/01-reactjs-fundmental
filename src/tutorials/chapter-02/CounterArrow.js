import React, { Component } from 'react';
import './Styling.css';

class CounterArrow extends Component {
    state = {
        counter:0
    }

    // create function atau method dengan arrow function
    increment = () => {
        // modifikasi state counter tetap menggunakan setState
        this.setState({
            counter: this.state.counter+1
        })
    }

    decrement = () => {
        // modifikasi state counter tetap menggunakan setState
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <div className='counter'>
                <h3>Counter Arrow : </h3>
                <h2>{this.state.counter}</h2>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}

export default CounterArrow;