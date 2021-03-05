import React from "react";
import axios from "axios";
import MyPlant from "components/myPlant/MyPlant";
import {
    ROUTE_MYPLANT_CREATE,
    ROUTE_MYPLANTS,
    ROUTE_MYPLANT_EDIT,
} from "constants/Routes";
import {Switch, Route, generatePath,withRouter} from "react-router-dom";
import {Api} from "services/Api";
import MyPlantFormCard from "components/myPlant/myPlantForms/createMyPlantForm/MyPlantFormCard";


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

        description: "",
        id: undefined,
        image_url: "",
        last_fertilized: undefined,
        last_watered: undefined,
        name: "",
        plant: undefined,
        room: undefined,
        updateMyPlantErrorMessage: '',

    }

    componentDidMount() {
        this.fetchMyPlants();
    }

    fetchMyPlants = () => {
        console.log("funtiontrigerred on did mount");
        this.setState({myPlantsInProgress: true});
        return delayFetch(plantsDelay, (resolve, reject) => {
            const promise = axios.get(Api.MYPLANTS)
                .then((response) => {
                    const data = response.data;
                    const myPlants = data.map((item) => {
                        const {
                            id, name, description, room, plant,
                            last_watered, last_fertilized, image_url
                        } = item;
                        ;
                        return {
                            id, name, description, room, plant,
                            last_watered, last_fertilized, image_url
                        };
                    });
                    const myPlantsSuccess = true;
                    this.setState({myPlants, myPlantsSuccess});
                    resolve();
                })
                .catch((error) => {
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

    onSubmitMyPlantUpdate = (myPlant) => {

        const path = generatePath(ROUTE_MYPLANTS);

        axios.put(Api.MYPLANTS + myPlant.id + '/', myPlant)
            .then((response) => {
                const data = response.data;
                const myPlant = data;
                const myPlants = [...this.state.myPlants];
                const getIndex = myPlants.findIndex(item => item.id === myPlant.id);
                myPlants[getIndex] = myPlant;
                this.setState({myPlants: myPlants});
                this.props.history.push(path);
            })
            .catch((error) => {
                const myPlantsErrorMessage = "Error updating plant";
                this.props.history.push(path);
                this.setState({
                    updateMyPlantErrorMessage: myPlantsErrorMessage,
                });
            });
    };

    onMyPlantDelete = (event) => {
        const idToDelete = parseInt(event.target.id);
        console.log(idToDelete);
        const myPlantToDelete = this.state.myPlants.find(obj => obj.id === idToDelete);
        console.log(myPlantToDelete);

        const index = this.state.myPlants.findIndex((myPlant) => myPlant.id === idToDelete);
        if (index !== -1) this.state.myPlants.splice(index, 1);
        const path = generatePath(ROUTE_MYPLANTS);
        axios.delete(Api.MYPLANTS + myPlantToDelete.id + '/', myPlantToDelete)
            .then(response => {
                this.props.history.push(path);
                this.setState(this.state);
            })
        console.log(myPlantToDelete.name);

    }

    onEdit = (event) => {
        console.log("edit triggered");
        console.log(event.target.id);
        const targetId = parseInt(event.target.id);
        console.log(targetId);

        const selectedMyPlant = this.state.myPlants.find(obj => obj.id === targetId)
        console.log(selectedMyPlant);
        this.setState({myPlantSelected: selectedMyPlant})
    }


    render() {
        const {myPlants, myPlantsSuccess, myPlantSelected,myPlantsInProgress} = this.state;
        const {plants, categories, rooms,} = this.props;
        const {description, id, image_url, last_fertilized, last_watered, name, plant, room} = myPlantSelected;

        const initialToEdit =
            {
                description: description,
                id: id,
                image_url: image_url,
                last_fertilized: last_fertilized,
                last_watered: last_watered,
                name: name,
                plant: plant,
                room: room,
            };


        const initialValues = {
            description: this.state.description,
            id: this.state.id,
            image_url: this.state.image_url,
            last_fertilized: this.state.last_fertilized,
            last_watered: this.state.last_watered,
            name: this.state.name,
            plant: this.state.plant,
            room: this.state.room,
        };

        return (

            <Switch>
                <Route path={ROUTE_MYPLANT_EDIT}>
                    <MyPlantFormCard
                        cateories={categories}
                        rooms={rooms}
                        plants={plants}
                        formLabel='Edit New Plant'
                        initialValues={initialToEdit}
                        onSubmit={this.onSubmitMyPlantUpdate}
                    />
                </Route>
                <Route exact path={ROUTE_MYPLANT_CREATE}>
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
                        myPlantsInProgress={myPlantsInProgress}
                        rooms={rooms}
                        onCreateMyPlant={this.onCreateMyPlant}
                        getSingleMyPlantId={this.getSingleMyPlantId}
                        onMyPlantDelete={this.onMyPlantDelete}
                        onEdit={this.onEdit}
                    />
                </Route>
            </Switch>
        )
    }
}
export default withRouter(MyPlantsPage);