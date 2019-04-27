import React, { Component } from 'react';

class Profile extends Component {
    render() {
        const { name, age } = this.props;
        console.log('profile render ', name, age);
        return (
            <div>
                <h1> {name}</h1>
                <p>{age}</p>
            </div>
        )
    }
}

class UserList extends Component {
    static defaultProps = {
        users: [],
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.users !== this.props.users;
    }

    render() {
        console.log('userList render')
        const userViews = this.props.users.map((user, index) => {
            const { name, age } = user;
            return <Profile key={index} name={name} age={age} />
        })
        return <div>
            {userViews}
        </div>
    }
}

class App extends Component {

    state = {
        count: 0,
        users: [
            { name: "jack", age: 20 },
            { name: "joi", age: 24 },
            { name: "jin", age: 21 },
            { name: "julia", age: 19 }
        ]
    }

    onButtonClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    addUser = () => {
        const { users } = this.state;
        // users.push({
        //     name: "hong",
        //     age: 30,
        // })

        this.setState({
            users: [...users, {
                name: "hong",
                age: 30,
            }]
        });
    }

    render() {
        const { users, count } = this.state;
        return (
            <div>
                <UserList users={users} />
                <h1>{count}</h1>
                <button onClick={this.onButtonClick} >Update</button>
                <button onClick={this.addUser} >add User</button>
            </div>)
    }
}

export default App;