import React  from "react";
import axios from "axios";


class Login extends React.Component {

    state = {
        credentials: {username: "", password: "",}
    }

    login = event => {
        console.log(this.state.credentials);
        fetch("http://gentle-tor-07382.herokuapp.com", {
            method: "POST",
            headers: {"Content-Type": "aplication/json"},
            body: JSON.stringify(this.state.credentials),

        }).then(
            data => {
                console.log("data");
            })
            .catch(error => console.error(error))
    }


    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
    }

    render() {
        return (
            <div>
                <label>Username
                    <input type='text' name='username' value={this.state.credentials.username}
                           onChange={this.inputChanged}
                    />
                </label>
                <label>Password
                    <input type='password' name="password"
                           onChange={this.inputChanged}
                    />
                </label>
                <button onClick={this.login}>login</button>
            </div>
        )
    }
}

export default Login;