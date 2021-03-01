import React, {useState} from 'react';
import {ListGroupItem, NavItem} from "reactstrap";
import {Link} from "react-router-dom";
import './Plants.scss';
import itemImage from "images/plant_theme1.jpg"
import {ROUTE_DELETE, ROUTE_EDIT, ROUTE_PLANT} from "constants/Routes";
import {BiEdit, BiTrash} from "react-icons/bi";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import bloomingPic from "images/blooming.jpg";
import leafyPic from "images/plant_theme4.jpg";

const getCategoryName = (categories, categoryId) => {
    const index = categories.findIndex((category) => category.id === categoryId);
    if (index < 0) {
        return 'Category temporarily undefined ';
    }
    return categories[index].name;
}


class PlantRow extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const {plant, categories, getSinglePlantId} = this.props;


        const {
            name,
            id,
            category,
            blooming,

        } = plant;
        console.log(plant);

        return (
            <div className="plant-card-items">
                    <div>
                        <Card>
                            <CardImg top width="100%" style={{height:"30vh"}}  src={blooming? bloomingPic : leafyPic} alt="Card image cap"/>
                            <CardBody >
                                <CardTitle tag="h5" >{name}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Category: {getCategoryName(categories, category)}</CardSubtitle>
                                <CardText>
                                    {name} is a plant form categories of plants {getCategoryName(categories, category)}.
                                    Please click to see more details about this type of plant
                                </CardText>
                                <Button tag={Link} to={ROUTE_PLANT + plant.id} id={id} onClick={getSinglePlantId}>Read more</Button>
                            </CardBody>
                        </Card>
                    </div>


                {/*</NavItem>*/}
            </div>


        )
    }
}


export default PlantRow;


