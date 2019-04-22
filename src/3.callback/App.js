import React, { Component } from 'react';

/**
 * App -> NumberItem 의 구조를 가지고 있다.
 * NumberItem에서 클릭을 했을 때 App의 State값을 변경하기 위해서
 * NumberItem의 props에 callback 함수를 전달한다.
 * NumberItem의 onClick에서 callback함수를 호출하면 App에서 state를 변경할 수 있다.
 * 
 */

class NumberItem extends Component{
  static defaultProps = {
    number:0,
  }

  onClick = (e)=>{
    console.log('click')
    if(this.props.onNumberClick){
      this.props.onNumberClick(e);
    }
  }

  render(){
    const {number} = this.props;
    const style = {
      backgroundColor:"crimson", 
      color:"white",
      padding:"16px",
      margin:"16px",
      fontWeight:"bold",
      fontSize:"30px",
      display:"inline-block"
    }
    return <div style={style} onClick={this.onClick}>{number}</div>
  }
}

class App extends Component {
  state = {
    number: 7
  }

  onNumberClick= ()=>{
    console.log('App.onClick')
    this.setState({
      number: this.state.number+1
    })
  }

  render() {
    const {number} = this.state;
    return <NumberItem number= {number} onNumberClick={this.onNumberClick}/>;

  }
}

export default App;
