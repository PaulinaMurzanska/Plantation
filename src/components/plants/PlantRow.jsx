import React, {useState} from 'react';
import {NavItem} from "reactstrap";
import {Link} from "react-router-dom";

import './Plants.scss';
import itemImage from "images/plant_theme1.jpg"
import withPlants from "components/plants/WithPlants";
import {ROUTE_SINGLEPLANT} from "constants/Routes";

// import './Plant.scss';


const getCategoryName = (categories, categoryId) => {
    const index = categories.findIndex((category) => category.id === categoryId);
    if (index < 0) {
        return '¯\\_(ツ)_/¯';
    }
    return categories[index].name;
}


class PlantRow extends React.PureComponent {

    constructor(props) {
        super(props);


    }
    // getSinglePlantId=(event)=>{
    //     console.log(event.target.id);
    // }

    render() {
        const {index, plant, categories,route,getSinglePlantId} = this.props;


        const {
            name,
            id,
            category,
        } = plant;


        return (

                <div className='plant-box-wrapper' >
                    <NavItem className='navigations' tag={Link} to={ROUTE_SINGLEPLANT + plant.id} onClick={getSinglePlantId} >

                        <div className='plant-box-theme' id={id}
                             style={{backgroundImage: `url(${itemImage})`}}/>

                        <div className='plant-box'>
                            <p>
                                {name}
                            </p>
                            <span>
                                - {getCategoryName(categories, category)} -
                            </span>
                        </div>

                    </NavItem>
                </div>



        )
    }
}


export default PlantRow;


