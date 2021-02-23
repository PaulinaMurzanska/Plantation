import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//
// import AuthenticatedNavbar from "components/authenticated/AuthenticatedNavbar";
// import AuthenticatedContainer from "components/authenticated/AuthenticatedContainer";
// import AuthenticatedFooter from 'components/authenticated/AuthenticatedFooter';
import PropTypes from 'prop-types';
import PlantationNavbar from "components/nav/PlantationNavbar";
import PlantationContainer from "components/main/PlantationContainer";

const AuthenticatedPage = ({ onLogout }) => (
  <Router>
    {/*<AuthenticatedNavbar onLogout={ onLogout } />*/}
    {/*<AuthenticatedContainer />*/}
    {/*<AuthenticatedFooter />*/}
    <PlantationNavbar onLogout={ onLogout }/>
    <PlantationContainer/>

  </Router>
);

AuthenticatedPage.propTypes = {
  onLogout: PropTypes.func.isRequired,
};


export default AuthenticatedPage;
