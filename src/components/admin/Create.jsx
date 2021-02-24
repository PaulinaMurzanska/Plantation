import React from "react";
import PlantFormCreate from "components/forms/plantCreateForm";
import withCategories from "components/categories/WithCategoriesFetch";
import withRoomsFetch from "components/rooms/withRooms";

class Create extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (

            <div>
                <PlantFormCreate/>
            </div>

        )
    }
}

export default withRoomsFetch(withCategories(Create));