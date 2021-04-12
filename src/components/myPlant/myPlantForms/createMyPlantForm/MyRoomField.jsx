import React from "react";
import {Field} from "formik";
import {FormGroup, Label} from "reactstrap";
import MyPlantFormFields from "constants/MyPlantFormFields";
import PlantationSelect from "components/formik/PlantationSelect";



class MyRoomField extends React.Component {

    render() {
        const { rooms} = this.props;
        return (

            <FormGroup>
                <Label for="room">Room:</Label>
                <Field
                    component={PlantationSelect}
                    required
                    id="room"
                    items={rooms}
                    name={MyPlantFormFields.ROOM}

                >
                    <option value='' hidden>Plant Type...
                    </option>
                </Field>

            </FormGroup>
        )
    }
}

export default MyRoomField;