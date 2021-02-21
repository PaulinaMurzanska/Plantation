import React, { Suspense, useEffect, useState } from 'react';
import './App.scss';
// import LoginPage from 'pages/login/LoginPage';
import Auth from "Auth";
import LoadingPage from "LoadingPage";
import Authenticated from "NEWFOLDER/Authenticated";
import LoginPage from "NEWFOLDER/LoginPage";

// const Authenticated = React.lazy(() => import('pages/authenticated/AuthenticatedPage'));

const NewApp = () => {

  const [ token, setToken ] = useState(Auth.getTokenFromStorage());
  const isAuthenticated = token && token !== Auth.emptyToken;

  const onTokenObtained = (token) => {
    Auth.putTokenToStorage(token);
    setToken(token);
  };

  const onLogout = () => onTokenObtained(Auth.emptyToken);

  useEffect(Auth.appendAxiosAuthorizationHeader(token), [ token ]);

  return (
    <Suspense fallback={ <LoadingPage /> }>
      {
        isAuthenticated ?
          <Authenticated onLogout={ onLogout } /> :
          <LoginPage onTokenObtained={ onTokenObtained } />
      }
    </Suspense>
  );
};


export default NewApp;