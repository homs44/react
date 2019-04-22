import React, { Component, Fragment } from 'react';


// 함수형식으로 작성한 컴포넌트
function ProfileA(props) {

  const style = {
    backgroundColor: props.bg,
    color: props.color
  }
  return <h1 style={style}>{myName} {myAge} </h1>
}

// 클래스로 작성한 컴포넌트
class ProfileB extends Component {
  static defaultProps = {
    bg: "blue",
    color: "white"
  }

  render() {
    const { bg, color } = this.props;

    const style = {
      backgroundColor: bg,
      color: color
    }

    return <h1 style={style}>{myName} {myAge} </h1>
  }
}
// 기본 props값들 
// 사용하는 props들을 부모로부터 전달받지 못했을 때 아래 값들이 사용된다.
ProfileB.defaultProps = {
  bg: "blue",
  color: "white"
}


// jsx 문법
const myName = "jack";
const myAge = 20;

const view = <Fragment>
  <h1>Hello, world!</h1>
  <h1>Okay</h1>
  <h1 style={{ backgroundColor: "crimson", color: "white" }}>{myName} {myAge} </h1>
  <ProfileA bg="crimson" color="white"/>
  <ProfileA />
  <ProfileB />
</Fragment>

// JSX문법이 아닌 자바스크립트 문법을 사용하려면 아래와 같이 작성해야한다.
const view2 = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
  );

class App extends Component {

  render() {
    return view;
  }
}

export default App;
