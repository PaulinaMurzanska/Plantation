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
const secToDays = 36000;


class SinglePlantItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {index, plant, categories, onEdit,onDelete} = this.props;
        const{id,name,blooming,fertilizing_interval,watering_interval,difficulty,
            required_temperature,required_humidity,required_exposure,category
        }=plant;
        const plantCategoryName = getCategoryName(categories, category);
        const watering =Math.ceil(watering_interval/secToDays);
        const fertilizing=Math.ceil(fertilizing_interval/secToDays);
        return (

            <Container>
                {name}

                <div className='single-plant-wrapper'>

                    <div className='plant-data'>

                        <div className="plant-requirements">
                            <span>- {plantCategoryName} -</span>
                            <h3>{name} {blooming ? <GiCottonFlower style={{color: "red", fontSize: "2em"}}/> :
                                <GiZigzagLeaf style={{color: "green", fontSize: "2em"}}/>}</h3>
                            <ListGroup>
                                <ListGroupItem><span>Difficulty level:</span><span>{difficulties[difficulty]}</span></ListGroupItem>
                                <ListGroupItem><span>Required Sun exposure: </span><span>{exposure[required_exposure]}</span></ListGroupItem>
                                <ListGroupItem><span>Required room humidity:</span><span> {humidity[required_humidity]}</span></ListGroupItem>
                                <ListGroupItem><span>Required room temperature: </span><span>{temp[required_temperature]}</span></ListGroupItem>
                                <ListGroupItem><span>Watering interval [days]:</span><span> {watering}</span></ListGroupItem>
                                <ListGroupItem><span>Fertilizing interval [days]:</span><span> {fertilizing}</span></ListGroupItem>
                                <ListGroupItem className='edition-icons'>

                                    <NavItem tag={Link} to={ROUTE_EDIT} >
                                        <BiEdit id={id} name={name}
                                                onClick={onEdit}
                                                className='edit'/>
                                    </NavItem>
                                    <NavItem  >
                                        <BiTrash className='delete'id={id} onClick={onDelete}/>
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