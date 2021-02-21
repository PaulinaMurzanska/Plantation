import React from "react";
import {
    ROUTE_ROOMS,
    ROUTE_CATEGORIES,
    ROUTE_PLANTS,
    ROUTE_MYPLANTS,
    ROUTE_MAIN, ROUTE_TEST, ROUTE_EDIT, ROUTE_POST,
    ROUTE_DELETE, ROUTE_CREATE, ROUTE_ADMIN, ROUTE_WELCOME,ROUTE_SINGLEPLANT
} from "/home/dev/Desktop/plantation/src/constants/Routes";
import {Route, Switch} from "react-router-dom";

import Plants from "components/plants/Plants";
import Categories from "components/categories/Categories";
import Rooms from "components/rooms/Rooms";
import MyPlants from "components/plants/MyPlants";
import WelcomeSite from "components/welcome/WelcomeSite";
import Test from "components/categories/TestSortedByCateg";
import Create from "components/admin/Create";
import Edit from "components/admin/Edit";
import Delete from "components/admin/Delete";
import Post from "components/admin/Post";
import Admin from "Admin";
import SinglePlant from "components/plants/SinglePlant";
import withPlants from "components/plants/WithPlants";
import axios from "axios";
import LogInPage from "components/welcome/LogInPage";
import PlantationNavbar from "components/nav/PlantationNavbar";

class PlantationContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            plants: [],
            createPlantErrorMessage: "",
            selectedPlantId:undefined,
        }
    }
      getSinglePlantId=(event)=>{
        console.log('kliknięto, funkcja działą');
        console.log(event.target.id);
        console.log(this.state.selectedPlantId);
        const targetId = event.target.id;
        this.setState({
            selectedPlantId:parseInt(targetId),
        })
    }


    render() {

        const {delayFetch} = this.props;
        const {createPlantErrorMessage,selectedPlantId} = this.state;
        console.log(selectedPlantId);
        return (
            <>

                <Switch>
                    <Route exact path={ROUTE_MAIN}>
                        <LogInPage/>
                    </Route>
                    <Route exact path={ROUTE_WELCOME}>
                        <PlantationNavbar/>
                        <WelcomeSite/>
                    </Route>
                    <Route path={ROUTE_PLANTS}>
                        <PlantationNavbar/>

                        <Plants
                            delayFetch={delayFetch}
                            getSinglePlantId={this.getSinglePlantId}
                            selectedPlantId={selectedPlantId}
                        />

                    </Route>
                    <Route path={ROUTE_CATEGORIES}>
                        <PlantationNavbar/>

                        <Categories/>
                    </Route>
                    <Route path={ROUTE_ROOMS}>
                        <PlantationNavbar/>
                        <Rooms/>
                    </Route>
                    <Route path={ROUTE_MYPLANTS}>
                        <PlantationNavbar/>
                        <MyPlants/>
                    </Route>

                    <Route path={ROUTE_SINGLEPLANT}>
                        <PlantationNavbar/>
                        <SinglePlant
                            selectedPlantId={selectedPlantId}
                       />
                    </Route>
                    <Route path={ROUTE_TEST}>
                        <Test/>
                    </Route>
                    <Route path={ROUTE_CREATE}>
                        <Create
                            onSubmitPlantCreate={this.onSubmitPlantCreate}
                        />
                    </Route>
                    <Route path={ROUTE_EDIT}>
                        <Edit/>
                    </Route>
                    <Route path={ROUTE_DELETE}>
                        <Delete/>
                    </Route>
                    <Route path={ROUTE_POST}>
                        <Post/>
                    </Route>
                    <Route path={ROUTE_ADMIN}>
                        <Admin
                            createPlantErrorMessage={createPlantErrorMessage}
                        />
                    </Route>

                </Switch>
            </>
        )
    }
}

export default withPlants(PlantationContainer);