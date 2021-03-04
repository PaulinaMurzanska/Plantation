import React from "react";
import "./PlantationNavBar.scss";
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
    ROUTE_MYPLANTS, ROUTE_ABOUT, ROUTE_MENU, ROUTE_MYPLANTSPAGE, ROUTE_ROOMS
} from '../../constants/Routes';

import {
faCogs,
    faHome,
    faLeaf,
    faFolderPlus,
    faBookReader,
} from "@fortawesome/free-solid-svg-icons";
// import {FaSeedling} from "react-icons/fa";
// import{RiPlantLine} from"react-icons/ri";

import PlantationNavItem from "./PlantationNavItem";
import {Link} from "react-router-dom";
import {Brand} from "components/sharedElements/Brand";


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
        const {onLogout} = this.props;


        return (
            <React.Fragment>

                <Navbar dark expand='md' className='mb-4 ' className='custom-navbar'

                >
                    <NavbarBrand tag={Link} to={ROUTE_ABOUT}>
                        <Brand/>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className='mr-auto ' navbar>
                            <PlantationNavItem path={ROUTE_ABOUT} icon={faHome} name="About"/>
                            {/*<PlantationNavItem path={ROUTE_MENU} icon={faFolderPlus} name="Menu"/>*/}
                            <PlantationNavItem path={ROUTE_PLANTS} icon={faLeaf} name="Types of Plants"/>
                            <PlantationNavItem path={ROUTE_MYPLANTS} icon={faCogs} name="My Plants"/>
                            <PlantationNavItem path={ROUTE_CATEGORIES} icon={faBookReader} name="Categories"/>
                            <PlantationNavItem path={ROUTE_ROOMS} icon={faBookReader} name="Rooms"/>

                        </Nav>

                        <Nav navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Account
                                </DropdownToggle>
                                <DropdownMenu right className='admin-logout-menu'>
                                    <DropdownItem>
                                        <a className='admin' href={"https://still-fortress-69660.herokuapp.com"}
                                           target="_blank">
                                            Admin
                                        </a>

                                    </DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem onClick={onLogout}>
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>

                    </Collapse>


                </Navbar>

            </React.Fragment>
        )
    }
}

export default PlantationNavbar;