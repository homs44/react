import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/**
 * 주소에 따라 다른 화면을 보여줘야할 때 react-router를 사용한다.
 * BrowserRouter로 감싼 다음 
 * 경로에 따라 보여줄 컴포넌트를 Route 컴포넌트를 사용해 정의하고
 * Link 컴포넌트를 사용해 해당 주소로 분기한다.
 */

/**
 * <Route path="/" exact component={Index} />
 *  path는 경로를 넣고 comopnent에는 컴포넌트를 넣으면된다.
 *  컴포넌트는 <를 사용하지 않고 그냥 이름 그대로 넣는다.
 */

function Index() {
  return <h2>Home</h2>;
}
function About() {
  return <h2>About</h2>;
}
function Users() {
  return <h2>Users</h2>;
}

class App extends Component {

  render(){
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
    )
  }
}

export default App;
