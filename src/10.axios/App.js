import React, { Component } from 'react';
import axios from 'axios';

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
    state = {
        users: [],
    }
    componentDidMount() {
        axios.get('http://localhost:4000/')
            .then((response) => {
                // handle success
                this.setState({
                    users: [...response.data]
                })
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    render() {
        const userViews = this.state.users.map((user, index) => {
            return <Profile key={index} name={user.name} age={user.age} />
        })
        return (
            <div>
                {userViews}
            </div>)
    }
}

export default App;