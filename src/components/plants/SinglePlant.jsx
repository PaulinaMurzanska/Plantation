import React from "react";
import SinglePlantItem from "components/plants/SinglePlantItem";
import { Redirect } from "react-router-dom";


class SinglePlant extends React.PureComponent {

    render() {
        const {selectedPlantId, plants, categories, index, onEdit} = this.props;
        console.log(selectedPlantId);

        const plantSelected = plants.filter(plant => {
            return plant.id === selectedPlantId
        });


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
                        />
                }

            </div>
        )
    }

}


export default SinglePlant;