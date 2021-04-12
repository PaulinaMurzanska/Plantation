import React from "react";
import SinglePlantItem from "components/plants/SinglePlantItem";
import { Redirect } from "react-router-dom";


class SinglePlant extends React.PureComponent {

    render() {
        const {selectedPlantId, plants, categories, index, onEdit,onDelete} = this.props;
        console.log(selectedPlantId);


        const plantSelected = plants.find(plant=>plant.id===selectedPlantId);


        return (
            <div>
                {
                    selectedPlantId === undefined ?
                        <Redirect to="/plants"/> :

                        <SinglePlantItem
                            plant={plantSelected}
                            categories={categories}
                            index={index}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                }

            </div>
        )
    }

}


export default SinglePlant;