import React from "react";
import {Container, ListGroup, ListGroupItem, Row, Col} from "reactstrap";
import "components/welcome/welcomeSite.scss";
import themepic1 from "images/plant_theme1.jpg";
import themepic2 from "images/plant_theme2.jpg";
import themepic3 from "images/plant_theme5.jpeg";
import themepic4 from "images/plant_theme6.jpeg";
import WelcomeSiteItem from "components/welcome/WelcomeSiteItem";
import {BrowserRouter, Link, NavLink as RouterNavLink} from 'react-router-dom';
import {NavItem, NavLink} from 'reactstrap';
import {ROUTE_CATEGORIES, ROUTE_MYPLANTS, ROUTE_PLANTS, ROUTE_ROOMS} from "constants/Routes";
import {Route, Switch} from "react-router-dom";
import PlantationNavbar from "components/nav/PlantationNavbar";


class WelcomeSite extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const borderTop = '130px solid #f7faf6';
        const fontColorBlack = "black";

        return (
            <>

                <div className='mycontainer'>

                    <WelcomeSiteItem
                        route={ROUTE_PLANTS}
                        pic={themepic1}
                        borderTop={borderTop}
                        fontColor={fontColorBlack}
                        title={"All Plants"}
                    />
                    <WelcomeSiteItem
                        route={ROUTE_CATEGORIES}
                        pic={themepic2}
                        borderTop={borderTop}
                        fontColor={fontColorBlack}
                        title={"Plants Categories"}

                    />
                    <WelcomeSiteItem
                        route={ROUTE_ROOMS}
                        pic={themepic3}
                        borderTop={borderTop}
                        fontColor={fontColorBlack}
                        title={"My Rooms"}

                    />
                    <WelcomeSiteItem
                        route={ROUTE_MYPLANTS}
                        pic={themepic4}
                        borderTop={borderTop}
                        fontColor={fontColorBlack}
                        title={"My Plants"}

                    />


                </div>
            </>

        )
    }
}

export default WelcomeSite;