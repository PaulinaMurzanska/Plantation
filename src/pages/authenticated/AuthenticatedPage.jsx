import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import PlantationNavbar from "components/nav/PlantationNavbar";
import PlantationContainer from "components/main/PlantationContainer";
import {Footer} from "components/footer/Footer";

const AuthenticatedPage = ({ onLogout }) => (
  <Router>
    <PlantationNavbar onLogout={ onLogout }/>
    <PlantationContainer/>
    <Footer/>


  </Router>
);

AuthenticatedPage.propTypes = {
  onLogout: PropTypes.func.isRequired,
};


export default AuthenticatedPage;
