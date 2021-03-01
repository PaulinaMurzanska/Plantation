import React from "react";
import {GiZigzagLeaf} from "react-icons/gi";
import {GiCottonFlower} from "react-icons/gi";
import {difficulties, exposure, humidity, temp} from "constants/PlantsParameters";
import {Button, Container, ListGroup, ListGroupItem, NavItem, NavLink, Table} from "reactstrap";
import './SinglePlantItem.scss';
import {BiEdit, BiTrash} from 'react-icons/bi';
import moment from "moment";
import {Link, Redirect} from "react-router-dom";
import {ROUTE_EDIT} from "constants/Routes";


const getCategoryName = (categories, plantCategoryId) => {
    const index = categories.findIndex((category) => category.id === plantCategoryId);
    if (index < 0) {
        return 'no cat';
    }
    return categories[index].name;
}
const secToDays = 84400;


class SinglePlantItem extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        const {index, plant, categories, category, onEdit} = this.props;

        const id = plant.map(a => a.id);
        const name = plant.map(a => a.name);
        const blooming = plant.map(a => a.blooming);
        const fertilizing = plant.map(a => a.fertilizing_interval);
        const watering = plant.map(a => a.watering_interval);
        const difficulty = plant.map(a => a.difficulty);
        const required_temp = plant.map(a => a.required_temperature);
        const required_humid = plant.map(a => a.required_humidity);
        const required_exposure = plant.map(a => a.required_exposure);
        const lastWatered = moment(plant.map(a => a.last_watered)).format("MMM Do YY");
        const lastFertilized = moment(plant.map(a => a.last_fertilized)).format("MMM Do YY");
        const plantCategoryId = parseInt(plant.map(a => a.category));
        const plantCategoryName = getCategoryName(categories, plantCategoryId);
        const isBlooming = blooming[0];
        const lastFertilizedRelative = moment(plant.map(a => a.last_fertilized)).startOf("day").fromNow();
        const lastWateredRelative = moment(plant.map(a => a.last_watered)).startOf("day").fromNow();


        console.log(watering);
        return (


            <Container>

                <div className='single-plant-wrapper'>

                    <div className='plant-data'>

                        <div className="plant-requirements">
                            <span>- {plantCategoryName} -</span>
                            <h3>{name} {isBlooming ? <GiCottonFlower style={{color: "red", fontSize: "2em"}}/> :
                                <GiZigzagLeaf style={{color: "green", fontSize: "2em"}}/>}</h3>
                            <ListGroup>
                                <ListGroupItem><span>Difficulty level:</span><span>{difficulties[difficulty]}</span></ListGroupItem>
                                <ListGroupItem><span>Required Sun exposure: </span><span>{exposure[required_exposure]}</span></ListGroupItem>
                                <ListGroupItem><span>Required room humidity:</span><span> {humidity[required_humid]}</span></ListGroupItem>
                                <ListGroupItem><span>Required room temperature: </span><span>{temp[required_temp]}</span></ListGroupItem>
                                <ListGroupItem><span>Watering interval [days]:</span><span> {watering[0]}</span></ListGroupItem>
                                <ListGroupItem><span>Fertilizing interval [days]:</span><span> {fertilizing[0]}</span></ListGroupItem>
                                <ListGroupItem className='edition-icons'>
                                    <NavItem tag={Link} to={ROUTE_EDIT} >
                                        <BiEdit id={id} name={name}
                                                onClick={onEdit}
                                                className='edit'/>

                                    </NavItem>
                                    <NavItem  >
                                        <BiTrash className='delete'/>

                                    </NavItem>
                                </ListGroupItem>

                            </ListGroup>
                        </div>


                    </div>


                </div>

            </Container>


        )
    }
}

export default SinglePlantItem;