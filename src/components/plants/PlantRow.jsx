import React from 'react';
import {Link} from "react-router-dom";
import './Plants.scss';
import {ROUTE_PLANT} from "constants/Routes";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


const getCategoryName = (categories, categoryId) => {
    const index = categories.findIndex((category) => category.id === categoryId);
    if (index < 0) {
        return 'Category temporarily undefined ';
    }
    return categories[index].name;
}
const getCategoryURL = (categories, categoryId) => {
    const index = categories.findIndex((category) => category.id === categoryId);
    if (index < 0) {
        return 'Category temporarily undefined ';
    }
    return categories[index].image_url;
}

class PlantRow extends React.PureComponent {

    render() {
        const {plant, categories, getSinglePlantId} = this.props;
        const {
            name,
            id,
            category,
        } = plant;

        return (
            <div className="plant-card-items">
                    <div>
                        <Card>
                            <CardImg top width="100%" style={{height:"30vh"}}  src={getCategoryURL(categories,category)} alt="Card image cap"/>
                            <CardBody >
                                <CardTitle tag="h5" >{name}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Category: {getCategoryName(categories, category)}</CardSubtitle>
                                <CardText>
                                    {name} is a plant from family of plants {getCategoryName(categories, category)}.
                                    Please click to see more details about this type of plant
                                </CardText>
                                <Button tag={Link} to={ROUTE_PLANT + plant.id} id={id} onClick={getSinglePlantId}>Read more</Button>
                            </CardBody>
                        </Card>
                    </div>

            </div>


        )
    }
}


export default PlantRow;


