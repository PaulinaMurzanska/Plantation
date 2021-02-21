import React from "react";
import {GiZigzagLeaf} from "react-icons/gi";
import {GiCottonFlower} from "react-icons/gi";
import {difficulties,exposure,humidity,temp} from "constants/PlantsParameters";


class SinglePlantItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {plants, plant, selectedPlantId} = this.props;

        console.log(plant);
        const name = plant.map(a => a.name);
        const blooming = plant.map(a => a.blooming);
        const fertilizing = plant.map(a => a.fertilizing_interval);
        const watering = plant.map(a => a.watering_interval);
        const difficulty = plant.map(a=>a.difficulty);
        const required_temp =plant.map(a=>a.required_temperature);
        const required_humid =plant.map(a=>a.required_humidity);
        const required_exposure =plant.map(a=>a.required_exposure);
        const lastWatered =plant.map(a=>a.last_watered);
        const lastFertilized=plant.map(a=>a.last_fertilized);

        console.log(name);


        return (

            <div>
                chosen plant name : {name}{blooming ? <GiCottonFlower/> : <GiZigzagLeaf/>}
                {fertilizing}
                {difficulties[difficulty]}
                {exposure[required_exposure]}
                {humidity[required_humid]}
                {temp[required_temp]}


            </div>

        )
    }
}

export default SinglePlantItem;