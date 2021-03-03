import React from "react";
import {ListGroupItem, ListGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap";
import bloomingPic from "images/blooming.jpg";
import leafyPic from "images/plant_theme4.jpg";
import {Link} from "react-router-dom";
import {ROUTE_MYPLANT_EDIT, ROUTE_PLANT, ROUTE_MYPLANT_BASE_TO_EDIT} from "constants/Routes";
import "./MyPlant.scss";
import sampleImage from "images/blooming.jpg";
import moment from "moment";



class MyPlantItem extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const getPlantName = (plants, plant) => {
            const index = plants.findIndex((item) => item.id === plant);
            if (index < 0) {
                return ' /*temporarily undefined */ ';
            }
            return plants[index].name;
        }
        const getRoomsName = (rooms, plant) => {
            const index = rooms.findIndex((room) => room.id === plant);
            if (index < 0) {
                return ' /*temporarily undefined */ ';
            }
            return rooms[index].name;
        }
        const getFertilizingInterval = (plants, plant) => {
            const index = plants.findIndex((item) => item.id === plant);
            if (index < 0) {
                return '  /*temporarily undefined */ ';
            }
            return plants[index].fertilizing_interval;
        }
        const getWateringInterval = (plants, plant) => {
            const index = plants.findIndex((item) => item.id === plant);
            if (index < 0) {
                return '  /*temporarily undefined */ ';
            }
            return plants[index].watering_interval;
        }


        const {myPlant, plants, rooms, getSinglePlantMyId} = this.props;
        const {name, room, plant, id, last_watered, last_fertilized, image_url} = myPlant;
        const watering = moment(last_watered).format("MMM Do YY");
        const fertilizing = moment(last_fertilized).format("MMM Do YY");



        return (


            <div className="my-plant-card-items">
                <div>
                    <Card>
                        <CardImg top width="100%" src={image_url} alt={name}
                                 style={{height: "30vh"}}/>
                        <CardBody>
                            <CardTitle tag="h5">{name}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Plant
                                Family: {getPlantName(plants, plant)}</CardSubtitle>
                            <div>
                                <hr/>
                                <p>Location : {getRoomsName(rooms, plant)} .</p>
                                <hr/>
                                <p>Last watered : {watering} </p>
                                <span>Remember to water this plant every {getWateringInterval(plants, plant)} days.</span>
                                <hr/>
                                <p>Last fertilized : {fertilizing}</p>
                                <span>Remember to fertilize this plant every {getFertilizingInterval(plants, plant)} days.</span>
                                <hr/>

                            </div>
                            <Button
                                tag={Link}
                                to={ROUTE_MYPLANT_EDIT + myPlant.id}
                                id={id}
                                onClick={getSinglePlantMyId}
                                style={{marginTop:"10px"}}
                            >Click to update</Button>


                        </CardBody>
                    </Card>
                </div>


                {/*</NavItem>*/}
            </div>


        )
    }
}

export default MyPlantItem;