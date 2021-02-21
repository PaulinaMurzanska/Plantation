import React from "react";
import './App.scss';
import {BrowserRouter as Router} from "react-router-dom";
import PlantationNavbar from "./components/nav/PlantationNavbar";
import PlantationContainer from "./components/main/PlantationContainer";
import LogInPage from "components/welcome/LogInPage";

class App extends React.PureComponent {
    constructor(props) {
        super(props);

    }

    delayFetch(ms, func) {
        return new Promise((resolve, reject) => setTimeout(() => func(resolve, reject), ms));
    }

    render() {
        return (
            <Router>
                <PlantationContainer/>
                {/*<LogInPage/>*/}
            </Router>
        )
    }
}

export default App;
