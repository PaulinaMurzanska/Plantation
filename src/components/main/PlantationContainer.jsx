import React from "react";
import {
    ROUTE_ROOMS,
    ROUTE_CATEGORIES,
    ROUTE_PLANTS,
    ROUTE_MAIN, ROUTE_TEST, ROUTE_EDIT, ROUTE_POST,
    ROUTE_DELETE, ROUTE_CREATE, ROUTE_ADMIN, ROUTE_WELCOME, ROUTE_PLANT, ROUTE_FORM, ROUTE_ABOUT, ROUTE_MENU
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
import withCategories from "components/categories/WithCategoriesFetch";
// import withPlants from "components/plants/WithPlants";
import axios from "axios";
import PlantFormCard from "components/plants/PlantFormCard";
import {About} from "components/about/About";


const PLANTS_FETCH_DELAY = 50;

const delayFetch = (ms, func) => {
    return new Promise((resolve, reject) => setTimeout(() => func(resolve, reject), ms));
}
const initialValues = {
    blooming: false,
    category: 1,
    description: '',
    difficulty: 1,
    fertilizing_interval: 14,
    name: "n",
    required_humidity: "medium",
    required_exposure: "partsun",
    required_temperature: "medium",
    watering_interval: '1',
    id: undefined,
};


class PlantationContainer extends React.PureComponent {

    state = {
        plants: [],
        createPlantErrorMessage: "",
        selectedPlantId: undefined,
        plantsInProgress: false,
        plantsSuccess: undefined,

    }


    getSinglePlantId = (event) => {
        const targetId = event.target.id;
        this.setState({
            selectedPlantId: parseInt(targetId),
        })

    }

    componentDidMount() {
        this.fetchPlants();
        this.props.fetchCategories();

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


        const {delayFetch, categories} = this.props;
        const {createPlantErrorMessage, selectedPlantId, plants, plantsSuccess, plantsInProgress} = this.state;
        console.log(selectedPlantId);


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
                        />
                    </Route>
                    <Route path={ROUTE_TEST}>
                        <Test/>
                    </Route>

                    <Route path={ROUTE_EDIT}>
                        <PlantFormCard
                            initialValues={initialValues}
                            onSubmit={this.onSubmitPlantCreate}

                        />
                    </Route>
                    <Route path={ROUTE_ABOUT}>
                        <About/>
                    </Route>
                    <Route path={ROUTE_FORM}>
                        <PlantFormCard
                            initialValues={initialValues}
                            onSubmit={this.onSubmitPlantCreate}

                        />
                    </Route>


                </Switch>
            </>
        )
    }
}

export default withCategories(withRouter(PlantationContainer));