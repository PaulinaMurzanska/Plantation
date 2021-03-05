import React from "react";
import {
    ROUTE_ROOMS,
    ROUTE_CATEGORIES,
    ROUTE_PLANTS,
    ROUTE_MAIN,
    ROUTE_EDIT,
    ROUTE_PLANT,
    ROUTE_ABOUT,
    ROUTE_MYPLANTS, ROUTE_CREATE, ROUTE_CATEGORY_EDIT, ROUTE_CATEGORY_CREATE, ROUTE_ROOM_EDIT, ROUTE_ROOM_CREATE
} from "/home/dev/Desktop/plantation/src/constants/Routes";
import {generatePath, Route, Switch, withRouter} from "react-router-dom";
import Plants from "components/plants/Plants";
import Categories from "components/categories/Categories";
import Rooms from "components/rooms/Rooms";
import SinglePlant from "components/plants/SinglePlant";
import axios from "axios";
import PlantFormCard from "components/plants/PlantFormCard";
import {About} from "components/about/About";
import MyPlantsPage from "components/myPlant/MyPlantsPage";
import {Api} from "services/Api";
import CategoryFormCard from "components/categories/categoryForm/CategoryFormCard";
import RoomFormCard from "components/rooms/roomForm/RoomFormCard";


const PLANTS_FETCH_DELAY = 500;
const room_fetch_delay_simulator = 500;
const category_fetch_delay_simulator = 500;
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
        categoryIdToEdit: undefined,
        categoriesInProgress: false,
        categoriesSuccess: undefined,
        selectedCategoryToEdit: [],
        baseCategoryIdToEdit: 0,
        baseCategorySlugToEdit: '',
        baseCategorySlugToDelete: '',
        deleteCategoryMessage: '',


        categoryName: '',
        image_url: "",
        slug: "",
        categoryId: undefined,
        categoryDescription: "",

        roomsInProgress: false,
        roomsSuccess: undefined,
        createRoomErrorMessage: '',
        rooms: [],
        roomName: '',
        roomId: undefined,
        exposure: "partsun",
        humidity: "medium",
        temperature: 'warm',
        selectedRoomToEdit: [],
        baseRoomIdToEdit: undefined,
        updateRoomErrorMessage: "",


    }



    componentDidMount() {
        this.fetchPlants();
        this.fetchCategories();
        this.fetchRooms();

    }

    getSinglePlantId = (event) => {
        console.log(event.target.id);
        const targetId = event.target.id;
        this.setState({
            selectedPlantId: parseInt(targetId),
        })

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

    fetchCategories = () => {
        this.setState({categoriesInProgress: true});
        return delayFetch(category_fetch_delay_simulator, (resolve, reject) => {
            return axios.get(Api.CATEGORIES)
                .then((response) => {
                    const data = response.data;
                    const categories = data.map((item) => ({
                        name: item.name, id: item.id,
                        image_url: item.image_url,
                        slug: item.slug,
                        description: item.description,

                    }));
                    const categoriesSuccess = true;
                    this.setState({categories, categoriesSuccess});
                    resolve();
                })
                .catch((error) => {
                    this.setState({categoriesSuccess: false});
                    reject();
                })
        }).finally(() => {
            this.setState({categoriesInProgress: false});
        })
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
    handleCategoryEdit = (event) => {
        const categoryId = parseInt(event.target.id);
        const baseCategorySlug = event.target.name;
        console.log(baseCategorySlug);
        const selectedCategory = this.state.categories.find(obj => obj.id === categoryId);
        this.setState({
            selectedCategoryToEdit: selectedCategory,
            baseCategoryIdToEdit: categoryId,
            baseCategorySlugToEdit: baseCategorySlug,
        })

    }
    onSubmitCategoryUpdate = (category) => {
        console.log("on submit triggered")
        console.log(category);
        const path = generatePath(ROUTE_CATEGORIES);

        axios.put(Api.CATEGORIES + this.state.baseCategorySlugToEdit + '/', category)
            .then((response) => {
                const data = response.data;
                const category = data;
                const categories = [...this.state.categories];
                const getIndex = categories.findIndex(item => item.id === category.id);
                categories[getIndex] = category;
                this.setState({categories: categories});
                this.props.history.push(path);
            })
            .catch((error) => {
                const plantsErrorMessage = "Error updating plant";
                this.props.history.push(path);
                this.setState({
                    updatePlantErrorMessage: plantsErrorMessage,
                });
            });
    }
    onCategoryDelete = (event) => {
        const categoryIdToDelete = parseInt(event.target.id);
        const baseCategorySlugToDelete = event.target.name;
        const categoryToDelete = this.state.categories.find(obj => obj.id === categoryIdToDelete);
        const index = this.state.categories.findIndex((category) => category.id === categoryIdToDelete);
        if (index !== -1) this.state.categories.splice(index, 1);
        const path = generatePath(ROUTE_CATEGORIES);
        axios.delete(Api.CATEGORIES + baseCategorySlugToDelete + '/', categoryToDelete)
            .then(response => {
                this.props.history.push(path);
                this.setState(this.state);
            });
    }

    fetchRooms = () => {
        this.setState({roomsInProgress: true});
        return delayFetch(room_fetch_delay_simulator, (resolve, reject) => {
            return axios.get(Api.ROOMS)
                .then((response) => {
                    const data = response.data;
                    const rooms = data.map((item) => {
                        const {
                            id, name, description, exposure, humidity, temperature
                        } = item;
                        ;
                        return {
                            id, name, description, exposure, humidity, temperature
                        };

                    });
                    const roomsSuccess = true;
                    this.setState({rooms, roomsSuccess});
                    resolve();
                })
                .catch((error) => {
                    this.setState({roomsSuccess: false});
                    reject();
                })
        }).finally(() => {
            this.setState({roomsInProgress: false});
        })

    }
    onSubmitRoomCreate = (room) => {
        console.log(room);
        console.log("room create triggered");
        const path = generatePath(ROUTE_ROOMS);

        axios.post(Api.ROOMS, room)
            .then((response) => {
                const data = response.data;
                const room = data;
                const rooms = [...this.state.rooms];
                rooms.push(room);
                this.setState({rooms: rooms});
                this.props.history.push(path);
            })
            .catch((error) => {
                const roomErrorMessage = "Error creating room";
                this.props.history.push(path);
                this.setState({
                    createRoomErrorMessage: roomErrorMessage,
                });
            });
    };
    handleRoomEdit = (event) => {
        const roomId = parseInt(event.target.id);
        console.log(roomId);
        const selectedRoom = this.state.rooms.find(obj => obj.id === roomId);
        console.log(selectedRoom);
        this.setState({
            selectedRoomToEdit: selectedRoom,
            baseRoomIdToEdit: roomId,
        })

    }
    onSubmitRoomUpdate = (room) => {
        console.log("on submit triggered")
        console.log(room);
        const path = generatePath(ROUTE_ROOMS);

        axios.put(Api.ROOMS + room.id + '/', room)
            .then((response) => {
                const data = response.data;
                const room = data;
                const rooms = [...this.state.rooms];
                const getIndex = rooms.findIndex(item => item.id === room.id);
                rooms[getIndex] = room;
                this.setState({rooms: rooms});
                this.props.history.push(path);
            })
            .catch((error) => {
                const roomErrorMessage = "Error updating room";
                this.props.history.push(path);
                this.setState({
                    updateRoomErrorMessage: roomErrorMessage,
                });
            });
    }

    removeModal =()=>{
       window.location.reload(false)
    }
    onRoomDelete = (event) => {
        const roomIdToDelete = parseInt(event.target.id);
        const roomToDelete = this.state.rooms.find(obj => obj.id === roomIdToDelete);
        const index = this.state.rooms.findIndex((room) => room.id === roomIdToDelete);
        if (index !== -1) this.state.rooms.splice(index, 1);
        axios.delete(Api.ROOMS + roomIdToDelete + '/', roomToDelete)
            .then(response => {
                this.removeModal();

            });

    }


    render() {

        const {
            categoriesInProgress, categoriesSuccess, categories, deleteMessage,
            selectedPlantId, plants, plantsSuccess,
            plantsInProgress, plantSelected, plantIdToEdit, selectedRoomToEdit,
            selectedCategoryToEdit, rooms
        } = this.state;

        const roomName = selectedRoomToEdit.name;
        const roomId = selectedRoomToEdit.id;

        const {
            name, blooming, id, watering_interval, category, difficulty, description,
            fertilizing_interval, required_exposure, required_humidity, required_temperature
        } = plantSelected;
        const {image_url, slug} = selectedCategoryToEdit;

        const categoryName = selectedCategoryToEdit.name;
        const categoryIdToEdit = selectedCategoryToEdit.id;
        const categoryDescriptionToEdit = selectedCategoryToEdit.description;

        const plantInitialToEdit =
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
        const plantInitial = {
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

        const categoryInitialValues = {
            name: this.state.categoryName,
            image_url: this.state.image_url,
            slug: this.state.slug,
            id: this.state.categoryId,
            description: this.state.categoryDescription,
        }
        const categoryInitialToEdit = {
            name: categoryName,
            image_url: image_url,
            slug: slug,
            id: categoryIdToEdit,
            description: categoryDescriptionToEdit,

        }


        const roomInitialValues = {
            name: this.state.roomName,
            id: this.state.roomId,
            exposure: this.state.exposure,
            humidity: this.state.humidity,
            temperature: this.state.humidity,

        };
        const roomInitialValuesToEdit = {
            name: roomName,
            id: roomId,
            exposure: this.state.exposure,
            humidity: this.state.humidity,
            temperature: this.state.humidity,

        };


        return (
            <>
                <Switch>

                    <Route exact path={ROUTE_MAIN}>
                        <About/>
                    </Route>
                    <Route path={ROUTE_ABOUT}>
                        <About/>
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
                    <Route path={ROUTE_PLANT}>
                        <SinglePlant
                            selectedPlantId={selectedPlantId}
                            plants={plants}
                            categories={categories}
                            onEdit={this.onEdit}
                            onDelete={this.onDelete}
                        />
                    </Route>
                    <Route path={ROUTE_CREATE}>
                        <PlantFormCard
                            categories={categories}
                            formLabel="Create New Plant"
                            initial={plantInitial}
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
                            initial={plantInitialToEdit}
                            onSubmit={this.onSubmitPlantUpdate}
                            selectedPlantId={selectedPlantId}
                            plantIdToEdit={plantIdToEdit}
                            plants={plants}
                            plant={plantSelected}
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
                            handleCategoryEdit={this.handleCategoryEdit}
                            categoriesInProgress={categoriesInProgress}
                            categoriesSuccess={categoriesSuccess}
                            categories={categories}
                            onCategoryDelete={this.onCategoryDelete}
                        />
                    </Route>
                    <Route path={ROUTE_CATEGORY_CREATE}>
                        <CategoryFormCard
                            onSubmit={this.onSubmitCategoryCreate}
                            formLabel="Create New Category"
                            initialValues={categoryInitialValues}
                        />
                    </Route>
                    <Route path={ROUTE_CATEGORY_EDIT}>
                        <CategoryFormCard
                            onSubmit={this.onSubmitCategoryUpdate}
                            formLabel="Edit New Category"
                            initialValues={categoryInitialToEdit}
                        />
                    </Route>


                    <Route path={ROUTE_ROOMS}>
                        <Rooms
                            handleRoomEdit={this.handleRoomEdit}
                            onRoomDelete={this.onRoomDelete}
                        />
                    </Route>
                    <Route path={ROUTE_ROOM_CREATE}>
                        <RoomFormCard
                            onSubmit={this.onSubmitRoomCreate}
                            initialValues={roomInitialValues}
                            formLabel="Create New Room"

                        />
                    </Route>
                    <Route path={ROUTE_ROOM_EDIT}>
                        <RoomFormCard
                            onSubmit={this.onSubmitRoomUpdate}
                            initialValues={roomInitialValuesToEdit}
                            formLabel="Edit New Room"
                        />
                    </Route>


                </Switch>
            </>
        )
    }
}

export default withRouter(PlantationContainer);