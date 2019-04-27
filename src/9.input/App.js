import React, { Component } from 'react';

class App extends Component {

    state = {
        email: '',
        password: '',
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { email, password } = this.state;
        return (
            <div>
                <input name="email" value={email} onChange={this.onChange} />
                <input name="password" type="password" value={password} onChange={this.onChange} />
            </div>)
    }
}

export default App;