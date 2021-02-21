import React from "react";
import "./LoginPage.scss";
import {BrowserRouter, BrowserRouter as Router} from "react-router-dom";

import welcomeImage from 'images/plant_theme5.jpeg';
import {Button, Container, Input, Label, NavLink} from "reactstrap";
import {Link} from "react-router-dom";
import {ROUTE_CATEGORIES, ROUTE_MAIN, ROUTE_PLANTS, ROUTE_WELCOME,ROUTE_NEWCONTAINER} from "constants/Routes";
import PlantationNavbar from "components/nav/PlantationNavbar";


class LogInPage extends React.Component {
    render() {
        return (

            <Container>
                <div className='login-page'>
                    <div className="welcome-box">
                        <h3>Welcome to Plantation</h3>
                        {/*<img src={welcomeImage}/>*/}
                        <div className='login-form'>
                            <form>
                                <Label htmlFor="username">Username</Label>
                                <Input id='username' type='text' name='username'/>

                                <Label htmlFor="password">Username</Label>
                                <Input id='password' type='text' name='password'/>



                                    <NavLink tag={Link} to={ROUTE_WELCOME}>
                                        <Button>Login</Button>
                                    </NavLink>


                            </form>

                        </div>

                    </div>
                </div>

            </Container>


        )
    }
}

export default LogInPage;