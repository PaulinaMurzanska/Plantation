import React from "react";
import withPlants from "components/plants/WithPlants";
import withCategories from "components/categories/WithCategoriesFetch";
import List from "reactstrap/es/List";
import PlantRow from "components/plants/PlantRow";
import SinglePlantItem from "components/plants/SinglePlantItem";
import {CardBody} from "reactstrap";


class SinglePlant extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPlants();
        this.props.fetchCategories();
    }

    render() {
        const {selectedPlantId, plants, categories} = this.props;

        console.log(selectedPlantId);
        console.log(plants);

        const plantSelected = plants.filter(plant => {
            return plant.id === selectedPlantId
        });


        return (
            <div>

                <SinglePlantItem
                plant={plantSelected}

               />

            </div>
        )
    }

}


export default withCategories(withPlants(SinglePlant));