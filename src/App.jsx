import React, {Suspense, useEffect, useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';
// import {BrowserRouter as Router} from "react-router-dom";
// import PlantationContainer from "./components/main/PlantationContainer";
// import LogInPage from "components/welcome/LogInPage";
import LoginPage from 'pages/login/LoginPage';
import Auth from 'services/Auth';
import LoadingPage from 'pages/loading/LoadingPage';
import Plants from "components/plants/Plants";
import PlantationContainer from "components/main/PlantationContainer";


const Authenticated = React.lazy(() => import('pages/authenticated/AuthenticatedPage'));

const App = () => {

    const [token, setToken] = useState(Auth.getTokenFromStorage());
    const isAuthenticated = token && token !== Auth.emptyToken;

    const onTokenObtained = (token) => {
        Auth.putTokenToStorage(token);
        setToken(token);
    };

  const onLogout = () => onTokenObtained(Auth.emptyToken);

  useEffect(Auth.appendAxiosAuthorizationHeader(token), [ token ]);
   return (
    <Suspense fallback={ <LoadingPage /> }>
      {/*{*/}
      {/*  isAuthenticated ?*/}
      {/*    <Authenticated onLogout={ onLogout } /> :*/}
      {/*    <LoginPage onTokenObtained={ onTokenObtained } />*/}
      {/*}*/}
      <Router>
            <PlantationContainer/>
      </Router>
{/*TUTAJ DODAŁAM TYMCZASOWO ROUTER I MÓJ CONTAINER,ŻEBY MÓC PRACOWAĆ NA DALSZYCH ELEMENTACH BEZ POTRZEBY LOGOWANIA. */}
{/*        JAK UDA SIĘ NAPRAWIĆ LOGOWANIE, TO TRZEBA */}
{/*        ODKOMENTOWOAĆ TO CO JEST W SUSPENCE I USUNĄĆ STAD ROUTER WRAZ Z PLANTATION CONTAINER*/}
    </Suspense>
  );



}

export default App;
