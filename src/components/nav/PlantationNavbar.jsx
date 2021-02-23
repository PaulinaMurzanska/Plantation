import React from "react";
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    UncontrolledDropdown,
    NavLink,
    NavItem,
    Button,

} from "reactstrap";
import {
    ROUTE_CATEGORIES,
    ROUTE_PLANTS,
    ROUTE_ROOMS,
    ROUTE_MYPLANTS
} from '../../constants/Routes';


import {faCog, faCogs, faHome, faLeaf, faSeedling, faSpa,faCodeBranch, faBars} from "@fortawesome/free-solid-svg-icons";
import PlantationNavItem from "./PlantationNavItem";


class PlantationNavbar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    toggle = () => {
        const isOpen = !this.state.isOpen;
        this.setState({
            isOpen
        })
    }

    render() {
        const {isOpen} = this.state;

        return (
            <React.Fragment>

                <Navbar color ='dark' dark expand='md' className='mb-4' >
                    <NavbarBrand href='/welcome'> Plantation </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className='mr-auto' navbar>
                           <PlantationNavItem path={ROUTE_PLANTS} icon={faSeedling} name="Plants"/>
                           <PlantationNavItem path={ROUTE_CATEGORIES} icon={faLeaf} name="Categories"/>
                           <PlantationNavItem path={ROUTE_ROOMS} icon={faHome} name="Rooms"/>
                           <PlantationNavItem path={ROUTE_MYPLANTS} icon={faSpa} name="MyPlants"/>
                        </Nav>

                    </Collapse>

                </Navbar>

            </React.Fragment>
        )
    }
}

export default PlantationNavbar;