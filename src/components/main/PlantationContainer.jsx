import React from "react";
import {
    ROUTE_ROOMS,
    ROUTE_CATEGORIES,
    ROUTE_PLANTS,
    ROUTE_MAIN,
    ROUTE_TEST,
    ROUTE_EDIT,
    ROUTE_POST,
    ROUTE_DELETE,
    ROUTE_CREATE,
    ROUTE_ADMIN,
    ROUTE_WELCOME,
    ROUTE_PLANT,
    ROUTE_FORM,
    ROUTE_ABOUT,
    ROUTE_MENU,
    ROUTE_MYPLANTS, ROUTE_MYPLANTSPAGE
} from "/home/dev/Desktop/plantation/src/constants/Routes";
import {generatePath, Route, Switch, withRouter} from "react-router-dom";
import Plants from "components/plants/Plants";
import Categories from "components/categories/Categories";
import Rooms from "components/rooms/Rooms";
import WelcomeSite from "components/welcome/WelcomeSite";
import Test from "components/categories/TestSortedByCateg";
import Create from "components/admin/Create";
import Edit from "components/admin/Edit";
import Delete from "components/admin/Delete";
import SinglePlant from "components/plants/SinglePlant";
import withRoomsFetch from "components/rooms/withRooms";
import withCategories from "components/categories/WithCategoriesFetch";
// import withPlants from "components/plants/WithPlants";
import axios from "axios";
import PlantFormCard from "components/plants/PlantFormCard";
import {About} from "components/about/About";
import MyPlant from "components/myPlant/MyPlant";
import MyPlantsPage from "components/myPlant/MyPlantsPage";


const PLANTS_FETCH_DELAY = 50;

const delayFetch = (ms, func) => {
    return new Promise((resolve, reject) => setTimeout(() => func(resolve, reject), ms));
}


class PlantationContainer extends React.PureComponent {

    state = {
        plants: [],
        createPlantErrorMessage: "",
        selectedPlantId: 0,
        plantsInProgress: false,
        plantsSuccess: undefined,
        plantIdToEdit: undefined,


    }


    getSinglePlantId = (event) => {
        console.log(event.target.id);
        const targetId = event.target.id;
        this.setState({
            selectedPlantId: parseInt(targetId),
        })

    }

    componentDidMount() {
        this.fetchPlants();
        this.props.fetchCategories();
        this.props.fetchRooms();

    }

    fetchPlants = () => {
        const requestUrl = "https://still-fortress-69660.herokuapp.com/plant";
        this.setState({plantsInProgress: true});


        return delayFetch(PLANTS_FETCH_DELAY, (resolve, reject) => {
            const promise = axios.get(requestUrl);

            promise
                .then((response) => {

                    const data = response.data;
                    const plants = data.map((item) => {
                        const {
                            id, name, description, watering_interval, fertilizing_interval, difficulty,
                            blooming, category, required_exposure, required_humidity, required_temperature
                        } = item;
                        ;


                        return {
                            id, name, description, watering_interval, fertilizing_interval, difficulty,
                            blooming, category, required_exposure, required_humidity, required_temperature
                        };

                    });

                    const plantsSuccess = true;
                    this.setState({plants, plantsSuccess});
                    resolve();
                })
                .catch((error) => {

                    // debugger;

                    this.setState({plantsSuccess: false});
                    reject();
                })
                .finally(() => {
                    this.setState({plantsInProgress: false});
                })
        });

    }

    onEdit = (event) => {
        console.log(event.target.id);
        this.setState({
            plantIdToEdit: parseInt(event.target.id),
        })
    }

    /*  As soon as posting data to server will be available, const plants and set state need to be placed below axios*/

    onSubmitPlantCreate = (plant) => {
        console.log(plant);
        const path = generatePath(ROUTE_PLANTS);
        const plants = [...this.state.plants];
        this.setState({plants: plants});

        plants.push(plant);

        axios.post('https://still-fortress-69660.herokuapp.com/plant', plant)
            .then((response) => {
                // const data = response.data;
                // const plant = data;
                // this.setState({plants: plants});
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


    render() {

        const {delayFetch, categories, rooms} = this.props;
        const {createPlantErrorMessage, selectedPlantId, plants, plantsSuccess, plantsInProgress, plantIdToEdit} = this.state;


        const initialValues = {
            blooming: false,
            category: 1,
            description: '',
            difficulty: 2,
            fertilizing_interval: 30,
            name: "",
            required_humidity: "medium",
            required_exposure: "partsun",
            required_temperature: "medium",
            watering_interval: '1',
            id: undefined,
        };


        return (
            <>

                <Switch>
                    <Route exact path={ROUTE_MAIN}>
                        {/*<PlantationNavbar/>*/}
                        <About/>
                    </Route>
                    <Route exact path={ROUTE_MENU}>
                        <WelcomeSite/>
                    </Route>
                    <Route path={ROUTE_PLANTS}>
                        <Plants
                            delayFetch={delayFetch}
                            getSinglePlantId={this.getSinglePlantId}
                            selectedPlantId={selectedPlantId}
                            fetchPlants={this.fetchPlants}
                            plantsInProgress={plantsInProgress}
                            plantsSuccess={plantsSuccess}
                            plants={plants}
                            categories={categories}

                        />
                    </Route>
                    {/*<Route path={ROUTE_MYPLANTS}>*/}
                    {/*    <MyPlant*/}
                    {/*        plants={plants}*/}
                    {/*    />*/}
                    {/*</Route>*/}
                    <Route path={ROUTE_MYPLANTSPAGE}>
                        <MyPlantsPage
                            plants={plants}
                            categories={categories}
                            rooms={rooms}

                        />
                    </Route>
                    <Route path={ROUTE_CATEGORIES}>
                        <Categories/>
                    </Route>
                    <Route path={ROUTE_ROOMS}>
                        <Rooms/>
                    </Route>
                    <Route path={ROUTE_PLANT}>
                        <SinglePlant
                            selectedPlantId={selectedPlantId}
                            plants={plants}
                            categories={categories}
                            onEdit={this.onEdit}
                        />
                    </Route>
                    <Route path={ROUTE_TEST}>
                        <Test/>
                    </Route>
                    <Route path={ROUTE_ABOUT}>
                        <About/>
                    </Route>
                    <Route path={ROUTE_FORM}>
                        <PlantFormCard
                            categories={categories}
                            formLabel="Create New Plant"
                            initialValues={initialValues}
                            onSubmit={this.onSubmitPlantCreate}
                            selectedPlantId={selectedPlantId}

                        />
                    </Route>
                    <Route path={ROUTE_EDIT}>
                        <PlantFormCard
                            categories={categories}
                            formLabel="Create New Plant"
                            initialValues={initialValues}
                            onSubmit={this.onSubmitPlantCreate}
                            selectedPlantId={selectedPlantId}
                            plantIdToEdit={plantIdToEdit}
                            plants={plants}

                        />
                    </Route>


                </Switch>
            </>
        )
    }
}

export default withRoomsFetch(withCategories(withRouter(PlantationContainer)));