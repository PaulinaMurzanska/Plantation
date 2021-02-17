import React from "react";
import {
    ROUTE_ROOMS,
    ROUTE_CATEGORIES,
    ROUTE_PLANTS,
    ROUTE_MYPLANTS,
    ROUTE_MAIN,
} from "/home/dev/Desktop/plantation/src/constants/Routes";
import {Route, Switch} from "react-router-dom";
import {Container} from "reactstrap";
// import Plants from "/home/dev/Desktop/plantation/src/components/plants/Plants";
// import Rooms from "/home/dev/Desktop/plantation/src/components/rooms/Rooms";
// import Categories from "/home/dev/Desktop/plantation/src/components/categories/Categories";
// import Plants from "components/plants/Plants";
import Plants from "components/plants/Plants";
import Categories from "components/categories/Categories";
import Rooms from "components/rooms/Rooms";
import MyPlants from "components/plants/MyPlants";
import WelcomeSite from "components/welcome/WelcomeSite";


class PlantationContainer extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {delayFetch}=this.props;
        return (
            <>
                <Switch>
                    <Route exact path={ROUTE_MAIN}>
                        <WelcomeSite/>
                    </Route>
                    <Route path={ROUTE_PLANTS}>
                        <Plants
                        delayFetch ={delayFetch}
                        />
                    </Route>
                    <Route path ={ROUTE_CATEGORIES}>
                        <Categories/>
                    </Route>
                    <Route path ={ROUTE_ROOMS}>
                        <Rooms/>
                    </Route>
                    <Route path ={ROUTE_MYPLANTS}>
                        <MyPlants/>
                    </Route>
                </Switch>
            </>
        )
    }
}

export default PlantationContainer;