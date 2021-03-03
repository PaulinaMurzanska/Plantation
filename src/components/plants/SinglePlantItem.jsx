// import React from "react";
import {GiZigzagLeaf} from "react-icons/gi";
import {GiCottonFlower} from "react-icons/gi";
import {difficulties, exposure, humidity, temp} from "constants/PlantsParameters";
import {Button, Container, ListGroup, ListGroupItem, NavItem, NavLink, Table} from "reactstrap";
import './SinglePlantItem.scss';
import {BiEdit, BiTrash} from 'react-icons/bi';
import moment from "moment";
import {Link, Redirect} from "react-router-dom";
import {ROUTE_DELETE, ROUTE_EDIT, ROUTE_PLANTS} from "constants/Routes";
import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const getCategoryName = (categories, plantCategoryId) => {
    const index = categories.findIndex((category) => category.id === plantCategoryId);
    if (index < 0) {
        return 'no cat';
    }
    return categories[index].name;
}
const secToDays = 36000;


const SinglePlantItem = ({index, plant, categories, onEdit, onDelete}) => {

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal)

    };

    // const {index, plant, categories, onEdit,onDelete} = this.props;
    const {
        id, name, blooming, fertilizing_interval, watering_interval, difficulty,
        required_temperature, required_humidity, required_exposure, category
    } = plant;
    const plantCategoryName = getCategoryName(categories, category);
    const watering = Math.ceil(watering_interval / secToDays);
    const fertilizing = Math.ceil(fertilizing_interval / secToDays);
    return (

        <Container>


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
                                <NavItem tag={Link} to={ROUTE_PLANTS}>
                                    <Button>Back to plants</Button>
                                </NavItem>
                                <div>
                                    <NavItem tag={Link} to={ROUTE_EDIT}>
                                    <BiEdit id={id} name={name}
                                            onClick={onEdit}
                                            className='edit'/>
                                </NavItem>
                                <div style={{position:"relative"}}>
                                    {/*<Button color="danger" onClick={toggle}>Click to delete</Button>*/}
                                    <BiTrash className='delete' id={id} onClick={toggle}

                                    />
                                    <Modal isOpen={modal} toggle={toggle}

                                    >
                                        <ModalHeader toggle={toggle}>You are about to delete {name}</ModalHeader>
                                        <ModalBody>
                                            This action will be irreversible. Are you sure you want to do that?
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="primary" onClick={onDelete}>Yes,delete</Button>{' '}
                                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                                        </ModalFooter>
                                    </Modal>
                                </div>

                                </div>



                            </ListGroupItem>


                        </ListGroup>
                    </div>


                </div>


            </div>

        </Container>


    )

}

export default SinglePlantItem;