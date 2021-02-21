// import React, {useEffect, useRef, useState} from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import 'components/authentication/login/LoginPageContainer.scss';
// import LoadingPage from 'pages/loading/LoadingPage';
// import LoginPageContainer from 'components/authentication/login/LoginPageContainer';
// import {Api} from 'services/Api';
//
// const LoginPage = () => {
//
//   const isDestroyed = useRef(false);
//   const [ loginInProgress, setLoginInProgress ] = useState(false);
//
//   /**
//    * @param {Credentials} credentials
//    * @param {function} onSubmitError
//    * @return
//    */
//   const onSignIn = (credentials, onSubmitError) => {
//     setLoginInProgress(true);
//
//     const onSignInErrorFn = (error) => onSignInError(error, onSubmitError);
//
//     return axios.post(Api.AUTH_TOKEN, credentials)
//       .then(onSignInSuccess)
//       .catch(onSignInErrorFn)
//       .finally(onSignInFinally);
//   };
//
//   const onSignInError = (error, onSubmitError) => {
//     const api = new Api();
//     const { errors, status } = api.getErrorsFromApi(error);
//     onSubmitError(errors, status);
//   };
//
//   const onSignInFinally = () => {
//     if (isDestroyed.current === false) {
//       setLoginInProgress(false);
//     }
//   };
//
//   const onSignInSuccess = (response) => {
//     const { token } = response.data;
//     onTokenObtained(token);
//   };
//
//   useEffect(() => {
//     isDestroyed.current = false;
//     return () => {
//       isDestroyed.current = true;
//     };
//   });
//
//   return (
//     <React.Fragment>
//       <LoadingPage visible={ loginInProgress } />
//       <LoginPageContainer onSubmit={ onSignIn } visible={ !loginInProgress } />;
//     </React.Fragment>
//   );
// };
//
// LoginPage.propTypes = {
//   onTokenObtained: PropTypes.func.isRequired,
// };
//
//
// export default LoginPage;

import React  from "react";
import axios from "axios";


class Login extends React.Component {

    state = {
        credentials: {username: "", password: "",}
    }

    login = event => {
        console.log(this.state.credentials);
        fetch("http://gentle-tor-07382.herokuapp.com/api-token-auth/", {
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