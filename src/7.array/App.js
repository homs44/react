import React, { Component } from 'react';

class Profile extends Component {

    render() {
        const { name, age } = this.props;
        return (
            <div>
                <h1> {name}</h1>
                <p>{age}</p>
            </div>
        )
    }
}

class App extends Component {

    render() {
        const users = [
            { name: "jack", age: 20 },
            { name: "joi", age: 24 },
            { name: "jin", age: 21 },
            { name: "julia", age: 19 }
        ]

        const userViews = users.map((user, index) => {
            return <Profile key={index} name={user.name} age={user.age} />
        })
        return (
            <div>
                {userViews}
            </div>)
    }
}

export default App;