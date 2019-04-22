import React, { Component } from 'react';
import './App.css';

/**
 * React Component 들은 생명주기 함수가 존재한다.
 * 아래 사이트 그림을 참고
 * https://code.likeagirl.io/understanding-react-component-life-cycle-49bf4b8674de
 */

class App extends Component {

    state = {
        number: 7
    }

    constructor(props) {
        super(props);
        console.log("constructor")
    }

    /**
     * 초기화 작업을 주로 함
     * 컴포넌트가 최호 화면에 그려지고 추가적으로 최신 게시글등을 서버로 부터 가져와야한다면
     * 여기다가 작성한다.
     */
    componentDidMount() {
        console.log("componentDidMount")
    }

    /**
     * 컴포넌트가 화면에 새로 그려져야하는지 판단함 
     * true일 경우 화면이 새로 그려진다.
     * 기본 값은 true이다.
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate")
        if (nextState.number > 10) {
            return false;
        }
        return true;
    }
    /**
     * 컴포넌트가 최초 그려진 이후
     * state나 props가 변경되고 화면이 업데이트 되면 호출 된다.
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
    }
    /**
     * 화면에 그려질 컴포넌트를 결정한다.
     * return 하는 컴포넌트를 화면에 그린다.
     */
    render() {
        console.log("render")
        const { number } = this.state;
        return <h1 onClick={this.onClick}>{number}</h1>
    }

    /**
     * 새 props로부터 state를 동기화시켜줘야할 때 사용한다.
     * 예를들어 props로 넘겨받은 값을 state에다 저장해야할 때.
     */
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps")
        return null;
    }

    /**
     * 화면이 그려지기 직전에 호출된다.
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate")
        const snapshot = {}
        return snapshot
    }

    /**
     * 화면상에서 컴포넌트가 사라질 때 호출된다.
     */
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    /**
     * 오류가 발생했을 때 호출 된다.
     */
    componentDidCatch(error, info) {

    }

    onClick = () => {
        this.setState({
            number: this.state.number + 1,
        })
    }

}

export default App;
