import {Navbar, NavbarBrand} from "reactstrap";
import {FaSeedling} from "react-icons/fa";
import React from "react";
import './Brand.scss';

export const Brand = () => {
    return (

            <div className='mylogo'>
                <div className='logo-name'>
                    <FaSeedling className="logo-icon"/>
                    <h1>Plantation</h1>
                    <span>plant display solution</span>
                </div>
            </div>

    )
}
