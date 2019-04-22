import React, { Component, Fragment } from 'react';
import './App.css';


/**
 * AnotherApp과 App 두가지 방식으로 코드를 작성할 수 있다.
 * App 처럼 사용할 것을 추천한다.
 */

class AnotherApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
    }
    increaseCount() {
        console.log('increase')
        this.setState({
            count: this.state.count + 1
        })
    }
    decreaseCount() {
        console.log('decrease')
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        const { count } = this.state;

        return (
            count > 10 ?
                <h1>초과입니다.</h1> :
                <Fragment>
                    <h1>{count}</h1>
                    <button onClick={this.increaseCount}>up</button>
                    <button onClick={this.decreaseCount}>down</button>
                </Fragment>
        );

    }
}

class App extends Component {

    state = {
        count: 0,
    }

    increaseCount = () => {
        console.log('increase')
        this.setState({
            count: this.state.count + 1
        })
    }

    decreaseCount = () => {
        console.log('decrease')
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        const { count } = this.state;

        return (
            count > 10 ?
                <h1>초과입니다.</h1> :
                <Fragment>
                    <h1>{count}</h1>
                    <button onClick={this.increaseCount}>up</button>
                    <button onClick={this.decreaseCount}>down</button>
                </Fragment>
        );

    }
}

export default App;
