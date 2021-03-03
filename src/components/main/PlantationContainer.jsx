import React from "react";
import {
    ROUTE_ROOMS,
    ROUTE_CATEGORIES,
    ROUTE_PLANTS,
    ROUTE_MAIN,
    ROUTE_EDIT,
    ROUTE_PLANT,
    ROUTE_ABOUT,
    ROUTE_MENU,
    ROUTE_MYPLANTS, ROUTE_CREATE, ROUTE_DELETE, ROUTE_CATEGORY_EDIT, ROUTE_CATEGORY_CREATE
} from "/home/dev/Desktop/plantation/src/constants/Routes";
import {generatePath, Route, Switch, withRouter} from "react-router-dom";
import Plants from "components/plants/Plants";
import Categories from "components/categories/Categories";
import Rooms from "components/rooms/Rooms";
import WelcomeSite from "components/welcome/WelcomeSite";
import SinglePlant from "components/plants/SinglePlant";
import withRoomsFetch from "components/rooms/withRooms";
import withCategories from "components/categories/WithCategoriesFetch";
import axios from "axios";
import PlantFormCard from "components/plants/PlantFormCard";
import {About} from "components/about/About";
import MyPlantsPage from "components/myPlant/MyPlantsPage";
import {Api} from "services/Api";
import {Delete} from "components/admin/Delete";
import CategoryFormCard from "components/categories/categoryForm/CategoryFormCard";


const PLANTS_FETCH_DELAY = 50;

const delayFetch = (ms, func) => {
    return new Promise((resolve, reject) => setTimeout(() => func(resolve, reject), ms));
}

class PlantationContainer extends React.PureComponent {

    state = {
        plants: [],
        createPlantErrorMessage: "",
        deleteMessage: '',
        selectedPlantId: undefined,
        plantsInProgress: false,
        plantsSuccess: undefined,
        plantIdToEdit: undefined,

        plantSelected: [],

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

        categories: [],
        createCategoryErrorMessage: '',


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
    onCreate = (event) => {
        console.log("kliknięto plant create");
        this.setState({selectedPlantId: undefined})
    }
    onEdit = () => {
        const selectedPlant = this.state.plants.find(obj => obj.id === this.state.selectedPlantId)
        console.log(selectedPlant);
        this.setState({plantSelected: selectedPlant})
    }


    onSubmitPlantCreate = (plant) => {
        console.log(plant);
        const path = generatePath(ROUTE_PLANTS);

        axios.post(Api.PLANTS, plant)
            .then((response) => {
                const data = response.data;
                const plant = data;
                const plants = [...this.state.plants];
                plants.push(plant);
                this.setState({plants: plants});
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
    onSubmitPlantUpdate = (plant) => {

        const path = generatePath(ROUTE_PLANTS);

        axios.put(Api.PLANTS + plant.id + '/', plant)
            .then((response) => {
                const data = response.data;
                const plant = data;
                const plants = [...this.state.plants];
                const getIndex = plants.findIndex(item => item.id === plant.id);
                plants[getIndex] = plant;
                this.setState({plants: plants});
                this.props.history.push(path);
            })
            .catch((error) => {
                const plantsErrorMessage = "Error updating plant";
                this.props.history.push(path);
                this.setState({
                    updatePlantErrorMessage: plantsErrorMessage,
                });
            });
    };

    onDelete = (event) => {
        const idToDelete = this.state.selectedPlantId;
        const plantToDelete = this.state.plants.find(obj => obj.id === idToDelete);
        const index = this.state.plants.findIndex((plant) => plant.id === idToDelete);
        if (index !== -1) this.state.plants.splice(index, 1);
        const path = generatePath(ROUTE_PLANTS);
        axios.delete(Api.PLANTS + plantToDelete.id + '/', plantToDelete)
            .then(response => {
                this.props.history.push(path);
                this.setState({deleteMessage: "You have successfully removed a plant from your list"})
            })
        console.log(plantToDelete.name);

    }


    onSubmitCategoryCreate = (category) => {
        console.log(category);
        const path = generatePath(ROUTE_CATEGORIES);

        axios.post(Api.CATEGORIES, category)
            .then((response) => {
                const data = response.data;
                const category = data;
                const categories = [...this.state.categories];
                categories.push(category);
                this.setState({categories: categories});
                this.props.history.push(path);
            })
            .catch((error) => {
                const categoryErrorMessage = "Error creating category";
                this.props.history.push(path);
                this.setState({
                    createCategoryErrorMessage: categoryErrorMessage,
                });
            });
    };

    render() {
        const {
            delayFetch, categories, rooms,
            handleCategoryEdit, onSubmitCategoryUpdate, onSubmitCategoryCreate
        } = this.props;

        console.log(this.props);
        const {
            createPlantErrorMessage, deleteMessage, selectedPlantId, plants, plantsSuccess,
            plantsInProgress, plantSelected, plantIdToEdit, createCategoryErrorMessage,
        } = this.state;


        const {
            name, blooming, id, watering_interval, category, difficulty, description,
            fertilizing_interval, required_exposure, required_humidity, required_temperature
        } = plantSelected;
        const toEdit =
            {
                blooming: blooming,
                category: category,
                description: description,
                difficulty: difficulty,
                fertilizing_interval: fertilizing_interval,
                name: name,
                required_humidity: required_humidity,
                required_exposure: required_exposure,
                required_temperature: required_temperature,
                watering_interval: watering_interval,
                id: id,
            }
        const initial = {
            blooming: this.state.blooming,
            category: this.state.category,
            description: this.state.description,
            difficulty: this.state.difficulty,
            fertilizing_interval: this.state.fertilizing_interval,
            name: this.state.name,
            required_humidity: this.state.required_humidity,
            required_exposure: this.state.required_exposure,
            required_temperature: this.state.required_temperature,
            watering_interval: this.state.watering_interval,
            id: this.state.id,
        };

        return (
            <>
                <Switch>

                    <Route exact path={ROUTE_MAIN}>
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
                            onCreate={this.onCreate}
                            deleteMessage={deleteMessage}

                        />
                    </Route>

                    <Route path={ROUTE_MYPLANTS}>
                        <MyPlantsPage
                            plants={plants}
                            categories={categories}
                            rooms={rooms}
                        />
                    </Route>
                    <Route path={ROUTE_CATEGORIES}>
                        <Categories
                        />
                    </Route>
                    <Route path={ROUTE_CATEGORY_CREATE}>
                        <CategoryFormCard
                            handleCategoryEdit={handleCategoryEdit}
                            onSubmitCategoryUpdate={onSubmitCategoryUpdate}
                            onSubmit={this.onSubmitCategoryCreate}
                        />
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
                            onDelete={this.onDelete}
                        />
                    </Route>

                    <Route path={ROUTE_ABOUT}>
                        <About/>
                    </Route>
                    <Route path={ROUTE_CREATE}>
                        <PlantFormCard
                            categories={categories}
                            formLabel="Create New Plant"
                            initial={initial}
                            onSubmit={this.onSubmitPlantCreate}
                            selectedPlantId={selectedPlantId}
                            plant={plantSelected}
                            plants={plants}
                        />
                    </Route>
                    <Route path={ROUTE_EDIT}>
                        <PlantFormCard
                            categories={categories}
                            formLabel="Create New Plant"
                            initial={toEdit}
                            onSubmit={this.onSubmitPlantUpdate}
                            selectedPlantId={selectedPlantId}
                            plantIdToEdit={plantIdToEdit}
                            plants={plants}
                            plant={plantSelected}
                        />
                    </Route>
                    <Route path={ROUTE_DELETE}>
                        <Delete/>
                    </Route>


                </Switch>
            </>
        )
    }
}

export default withRoomsFetch(withCategories(withRouter(PlantationContainer)));