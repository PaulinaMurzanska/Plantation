import React from "react";
import axios from "axios";
import {CardBody, ListGroup} from "reactstrap";
import MyPlant from "components/myPlant/MyPlant";
import {ROUTE_MYPLANTS, ROUTE_PLANTS} from "constants/Routes";
import {Switch, Route} from "react-router-dom";
import Plants from "components/plants/Plants";


const plantsDelay = 500;

const delayFetch = (ms, func) => {
    return new Promise((resolve, reject) => setTimeout(() => func(resolve, reject), ms));
}

class MyPlantsPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            myPlantsInProgress: false,
            myPlantsSuccess: undefined,
            myPlants: [],

        }

    }

    componentDidMount() {
        this.fetchMyPlants();
    }


    fetchMyPlants = () => {
        console.log("funtiontrigerred on did mount");
        const requestUrl = "https://still-fortress-69660.herokuapp.com/user-plant";
        this.setState({myPlantsInProgress: true});
        return delayFetch(plantsDelay, (resolve, reject) => {
            const promise = axios.get(requestUrl)
                .then((response) => {
                    const data = response.data;
                    const myPlants = data.map((item) => {
                        const {
                            id, name, description, room, plant, difficulty,
                            last_watered, last_fertilized, image_url
                        } = item;
                        ;

                        return {
                            id, name, description, room, plant, difficulty,
                            last_watered, last_fertilized, image_url
                        };

                    });

                    const myPlantsSuccess = true;
                    this.setState({myPlants, myPlantsSuccess});
                    resolve();
                })
                .catch((error) => {

                    // debugger;

                    this.setState({myPlantsSuccess: false});
                    reject();
                })
                .finally(() => {
                    this.setState({myPlantsInProgress: false});
                })
        });

    }


    render() {
        const {myPlants,myPlantsSuccess} = this.state;
        const {plants, categories,rooms} = this.props;


        return (

            <>

                <MyPlant
                    myPlants={myPlants}
                    plants={plants}
                    categories={categories}
                    myPlantsSuccess={myPlantsSuccess}
                    rooms={rooms}

                />


            </>


        )
    }


}

export default MyPlantsPage;