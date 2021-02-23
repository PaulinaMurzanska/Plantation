import React from "react";
import {GiZigzagLeaf} from "react-icons/gi";
import {GiCottonFlower} from "react-icons/gi";
import {difficulties, exposure, humidity, temp} from "constants/PlantsParameters";
import {Button, Container, ListGroup, ListGroupItem, NavItem, NavLink, Table} from "reactstrap";
import './SinglePlantItem.scss';
import {BiEdit, BiTrash} from 'react-icons/bi';
import moment from "moment";
import {Link, Redirect} from "react-router-dom";
import {ROUTE_DELETE, ROUTE_EDIT} from "constants/Routes";


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

    redirectToEdition = () => {
        <Redirect to="/plants"/>
    }


    render() {
        const {index, plant, categories, category} = this.props;

        console.log(plant);
        const name = plant.map(a => a.name);
        const blooming = plant.map(a => a.blooming);
        const fertilizing = Math.ceil(plant.map(a => a.fertilizing_interval) / secToDays);
        const watering = Math.ceil(plant.map(a => a.watering_interval) / secToDays);
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
                                <ListGroupItem><span>Watering interval [days]:</span><span> {watering}</span></ListGroupItem>
                                <ListGroupItem><span>Fertilizing interval [days]:</span><span> {fertilizing}</span></ListGroupItem>
                                <ListGroupItem className='edition-icons'>
                                    <NavItem tag={Link} to={ROUTE_EDIT}>
                                        <BiEdit className='edit'/>

                                    </NavItem>
                                    <NavItem tag={Link} to={ROUTE_DELETE}>
                                        <BiTrash className='delete'/>

                                    </NavItem>
                                </ListGroupItem>

                            </ListGroup>

                        </div>
                        <div className='plant-actions'>
                            <div className="plant-watering">
                                <h4>Watering</h4>
                                <div className='info-table'>
                                    <Table bordered>
                                        <thead>
                                        <tr>
                                            <th>Last Watered</th>
                                            <th>How long ago?</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>{lastWatered}</td>
                                            <td>{lastWateredRelative}</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                    <Button> I watered plant today</Button>

                                </div>
                            </div>

                            <div className="plant-fertilizing">
                                <h4>Fertilizing</h4>

                                <div className='info-table'>
                                    <Table bordered>
                                        <thead>
                                        <tr>

                                            <th>Last fertilized</th>
                                            <th>How long ago?</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>{lastFertilized}</td>
                                            <td>{lastFertilizedRelative}</td>

                                        </tr>
                                        </tbody>
                                    </Table>
                                    <Button> I Fertilized plant today</Button>

                                </div>


                            </div>

                        </div>

                    </div>


                </div>

            </Container>


        )
    }
}

export default SinglePlantItem;