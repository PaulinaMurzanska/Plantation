import React from "react";
import {Button, Container} from "reactstrap";
import "./About.scss";
import {Brand} from "components/sharedElements/Brand";
import {Link} from "react-router-dom";
import {ROUTE_PLANTS} from "constants/Routes";

export const About = () => {
    return (
        <Container>
            <div className='about-section'>
                <Brand/>


                <br/>
                <div className='line'/>
                <h3>Welcome to Plantation</h3>
                <p>This App has been build for educational purposes.</p>
                <p> With this application, you can manage plants that you have in your home.</p>
                <p>You simply use default plants list or create your new base - plant.</p>
                <p>Based on those plants you can create your own plants with custom names,
                location and data of last fertilizing and watering actions.</p>
                <p>Lets start!</p>

                <div className='welcome-button'>
                     <Button  active
                              style={{backgroundColor:"#387f34"}}
                              size='lg'
                              tag={Link}
                              to={ROUTE_PLANTS}
                     >Let Me In</Button>
                </div>


            </div>
        </Container>
    )
}
