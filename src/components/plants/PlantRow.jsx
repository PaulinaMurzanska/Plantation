import React, {useState} from 'react';
import {Button, Collapse, Card, CardBody} from "reactstrap";

// import './Plant.scss';


const PlantRow = (props) => {

    return (
        <tr>
            <td>{props.index}
            </td>

            <td>{props.plant.id} </td>
            <td>{props.plant.name}</td>

        </tr>
    )


}

export default PlantRow;


