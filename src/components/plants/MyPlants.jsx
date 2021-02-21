import React from "react";
import Login from "components/Login";

class MyPlants extends React.PureComponent{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <React.Fragment>
                <Login/>
            </React.Fragment>
        )
    }
}
export default MyPlants;