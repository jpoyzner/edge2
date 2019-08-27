import './Counter.scss';
import Store from './store';
import React, {Component} from 'react';

export default class Counter extends Component {
    render() {
        return (
            <p>
                {this.props.text + " "}
                Counter = {Store.getState().count}
                {' '}
                <button onClick={this.onIncrement}>
                  +
                </button>
                {' '}
                <button onClick={this.onDecrement}>
                  -
                </button>
                {' '}
                <button onClick={this.incrementIfOdd.bind(this)}>
                  Increment if odd
                </button>
                {' '}
                <button onClick={this.incrementAsync.bind(this)}>
                  Increment in one second
                </button>
            </p>
        )
    }

    incrementIfOdd() {
        if (Store.getState().count % 2 !== 0) {
            this.onIncrement()
        }
    }

    incrementAsync() {
        setTimeout(this.onIncrement, 1000)
    }

    onIncrement() {
        Store.dispatch({type: 'INCREMENT'});
    }

    onDecrement() {
        Store.dispatch({type: 'DECREMENT'});    } 
}