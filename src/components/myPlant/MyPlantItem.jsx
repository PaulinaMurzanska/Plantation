import React, {useState} from "react";
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
import {Link} from "react-router-dom";
import {ROUTE_MYPLANT_EDIT, ROUTE_MYPLANTS, ROUTE_MYPLANTSPAGE} from "constants/Routes";
import "./MyPlant.scss";
import moment from "moment";
import {BiTrash} from "react-icons/bi";
import defaultImage from "images/plant_theme3.jpeg";


const MyPlantItem = ({myPlant, plants, rooms, onEdit, onMyPlantDelete}) => {

    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal)
    };

    const getPlantName = (plants, plant) => {
        const index = plants.findIndex((item) => item.id === plant);
        if (index < 0) {
            return 'undefined';
        }
        return plants[index].name;
    }
    const getRoomsName = (rooms, room) => {
        const index = rooms.findIndex((item) => item.id === room);
        if (index < 0) {
            return 'undefined';
        }
        return rooms[index].name;
    }
    const getFertilizingInterval = (plants, plant) => {
        const index = plants.findIndex((item) => item.id === plant);
        if (index < 0) {
            return 'undefined';
        }
        return plants[index].fertilizing_interval;
    }
    const getWateringInterval = (plants, plant) => {
        const index = plants.findIndex((item) => item.id === plant);
        if (index < 0) {
            return 'undefined';
        }
        return plants[index].watering_interval;
    }


    const {name, room, plant, id, last_watered, last_fertilized, image_url} = myPlant;

    const watering = moment(last_watered).format("MMM Do YY");
    const fertilizing = moment(last_fertilized).format("MMM Do YY");
    const image = image_url==="" ? defaultImage : image_url;



    return (

        <div className="my-plant-card-items">
            <div>
                <Card>
                    <CardImg top width="100%" src={image} alt={name}
                             style={{height: "30vh"}}/>
                    <CardBody>
                        <CardTitle tag="h5">{name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Plant
                            Family: {getPlantName(plants, plant)}</CardSubtitle>
                        <div>
                            <hr/>
                            <p>Location : {getRoomsName(rooms, room)} </p>
                            <hr/>
                            <p>Last watered : {watering} </p>

                            <span>Remember to water this plant every {getWateringInterval(plants, plant)} days.</span>

                            <hr/>
                            <p>Last fertilized : {fertilizing}</p>
                            <span>Remember to fertilize this plant every {getFertilizingInterval(plants, plant)} days.</span>
                            <hr/>

                        </div>
                        <div className='card-buttons' style={{display:"flex", alignItems:"center", marginTop:"8px", justifyContent:"space-between"}}>
                            <Button
                                tag={Link}
                                to={ROUTE_MYPLANT_EDIT + myPlant.id}
                                id={id}
                                onClick={onEdit}

                            >Click to update
                            </Button>
                            <div className="trash" >
                                <BiTrash className='delete' onClick={toggle}
                                         style={{
                                             fontSize: "2.2rem",
                                             marginLeft: "15px",
                                         }}
                                />
                                <Modal isOpen={modal} toggle={toggle}>
                                    <ModalHeader toggle={toggle}>You are about to delete {name}</ModalHeader>
                                    <ModalBody>
                                    <span style={{
                                        fontSize: '1.5rem',
                                        fontWeight: "700"
                                    }}>! Are you sure ? ! </span>
                                        if you delete, this action is irreversible.

                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" id={id}
                                                onClick={onMyPlantDelete}
                                                tag={Link} to={ROUTE_MYPLANTSPAGE}
                                        >Yes,delete</Button>{' '}
                                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </div>

                        </div>


                    </CardBody>
                </Card>
            </div>

        </div>


    )

}

export default MyPlantItem;