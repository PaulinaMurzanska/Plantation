import React from "react";
import axios from "axios";
import {CardBody, ListGroup} from "reactstrap";
import MyPlant from "components/myPlant/MyPlant";
import {
    ROUTE_ABOUT,
    ROUTE_MYPLANT_CREATE,
    ROUTE_MYPLANTS,
    ROUTE_MYPLANT_EDIT,
    ROUTE_MYPLANTSPAGE,
    ROUTE_PLANTS,
} from "constants/Routes";
import {Switch, Route, generatePath} from "react-router-dom";
import Plants from "components/plants/Plants";
import {Api} from "services/Api";
import {About} from "components/about/About";
import MyPlantFormCard from "components/myPlant/myPlantForms/createMyPlantForm/MyPlantFormCard";
import Test from "components/myPlant/Test";
import {BrowserRouter as Router, withRouter} from 'react-router-dom';
// import withRoomsFetch from "components/rooms/withRooms";


const plantsDelay = 500;

const delayFetch = (ms, func) => {
    return new Promise((resolve, reject) => setTimeout(() => func(resolve, reject), ms));
}

class MyPlantsPage extends React.PureComponent {

    state = {
        myPlantsInProgress: false,
        myPlantsSuccess: undefined,
        myPlants: [],

        selectedMyPlantId: undefined,
        myPlantSelected: [],

        description: '',
        difficulty: 2,
        id: undefined,
        image_url: "",
        last_fertilized: undefined,
        last_watered: undefined,
        name: "",
        plant: undefined,
        room: undefined,


    }


    componentDidMount() {
        this.fetchMyPlants();
    }


    fetchMyPlants = () => {
        console.log("funtiontrigerred on did mount");
        // const requestUrl = "https://still-fortress-69660.herokuapp.com/user-plant";
        this.setState({myPlantsInProgress: true});
        return delayFetch(plantsDelay, (resolve, reject) => {
            const promise = axios.get(Api.MYPLANTS)
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

    onSubmitPlantCreate = (myPlant) => {
        console.log(myPlant);
        const path = generatePath(ROUTE_MYPLANTS);

        console.log(myPlant);
        axios.post(Api.MYPLANTS, myPlant)
            .then((response) => {
                const data = response.data;
                const myPlant = data;
                const myPlants = [...this.state.myPlants];
                myPlants.push(myPlant);
                this.setState({myPlants: myPlants});
                this.props.history.push(path);
            })
            .catch((error) => {
                const plantsErrorMessage = "Error creating plant";
                this.props.history.push(path);
                this.setState({
                    createPlantErrorMessage: plantsErrorMessage,
                });
            });
    };

    onCreateMyPlant = (event) => {
        console.log("kliknięto plant create");
        this.setState({selectedMyPlantId: undefined})
    }
    getSingleMyPlantId = (event) => {
        console.log(event.target.id);
        const targetId = event.target.id;
        this.setState(
            // {myPlantSelected: selectedMyPlant}
            {selectedMyPlantId: parseInt(targetId),}
        )


    }

    //   onMyPlantDelete = (event) => {
    //     const idToDelete = event.target.id;
    //     const myPlantToDelete = this.state.myPlants.find(obj => obj.id === idToDelete);
    //     const index = this.state.myPlants.findIndex((myPlant) => myPlant.id === idToDelete);
    //     if (index !== -1) this.state.plants.splice(index, 1);
    //     const path = generatePath(ROUTE_MYPLANTS);
    //     axios.delete(Api.MYPLANTS + myPlantToDelete.id + '/', myPlantToDelete)
    //         .then(response => {
    //             this.props.history.push(path);
    //             this.setState({deleteMessage: "You have successfully removed a plant from your list"})
    //         })
    //     console.log(myPlantToDelete.name);
    //
    // }


    // onEdit = (event) => {
    //     const selectedMyPlant = this.state.myPlants.find(obj => obj.id === this.state.selectedMyPlantId)
    //     console.log(selectedMyPlant);
    //     this.setState({myPlantSelected: selectedMyPlant})
    // }


    render() {
        const {myPlants, myPlantsSuccess, myPlantSelected, selectedMyPlantId} = this.state;
        const {plants, categories, rooms,} = this.props;
        // const {description, difficulty, id, image_url, last_fertilized, last_watered, name, plant, room} = myPlantSelected;

        const selectedMyPlant = myPlants.find(obj => obj.id === selectedMyPlantId)
        // console.log(selectedMyPlant);


        // console.log(myPlants);
        // console.log(myPlantSelected);
        // console.log(selectedMyPlantId);
        // console.log(selectedMyPlant);

        //
        // const toEdit =
        //     {
        //         description: description,
        //     difficulty: difficulty,
        //     id: id,
        //     image_url:image_url,
        //     last_fertilized:last_fertilized,
        //     last_watered:last_watered,
        //     name:name,
        //     plant:plant,
        //     room:room,
        //
        //     };


        const initialValues = {
            description:this.state.description,
            difficulty:this.state.difficulty,
            id:this.state.id,
            image_url:this.state.image_url,
            last_fertilized:this.state.last_fertilized,
            last_watered:this.state.last_watered,
            name: this.state.name,
            plant: this.state.plant,
            room: this.state.room,
        };



        return (

            <Switch>
                <Route exact path={ROUTE_MYPLANT_EDIT}>
                    <MyPlantFormCard
                        cateories={categories}
                        rooms={rooms}
                        plants={plants}
                        formLabel='Edit New Plant'
                        // initialValues={toEdit}
                        // onSubmit={this.onSubmitPlantCreate}
                        myPlant={selectedMyPlant}
                    />
                </Route>

                <Route exact path={ROUTE_MYPLANT_CREATE} >
                    <MyPlantFormCard
                        cateories={categories}
                        rooms={rooms}
                        plants={plants}
                        formLabel='Create New Plant'
                        initialValues={initialValues}
                        onSubmit={this.onSubmitPlantCreate}
                    />
                </Route>

                <Route exact path={ROUTE_MYPLANTS}>
                    <MyPlant
                        myPlants={myPlants}
                        plants={plants}
                        categories={categories}
                        myPlantsSuccess={myPlantsSuccess}
                        rooms={rooms}
                        onCreateMyPlant={this.onCreateMyPlant}
                        getSingleMyPlantId={this.getSingleMyPlantId}
                        onMyPlantDelete={this.onMyPlantDelete}


                    />

                </Route>

            </Switch>


        )
    }


}

export default withRouter(MyPlantsPage);