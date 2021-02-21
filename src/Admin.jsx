import React, {useState} from "react";
import Post from "components/admin/Post";





class Admin extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const{createPlantErrorMessage}=this.props;
        console.log(createPlantErrorMessage);
        return(
            <div>
                <p>{createPlantErrorMessage}</p>
               <Post/>
            </div>
        )
    }







}

export default Admin;