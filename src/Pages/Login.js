import React, { Component } from "react";

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }
    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        });
    };
    handlepasswordChange = event => {
        this.setState({
            password: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        console.log(`${this.state.username} ${this.state.password}`);
    };
    render() {
        const { username, password } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={this.handleUsernameChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={this.handlepasswordChange}
                            required
                        />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
