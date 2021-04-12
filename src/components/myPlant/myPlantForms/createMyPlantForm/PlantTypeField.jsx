import React from "react";
import {Field} from "formik";
import {FormGroup, Label} from "reactstrap";
import MyPlantFormFields from "constants/MyPlantFormFields";
import PlantationSelect from "components/formik/PlantationSelect";

class PlantTypeField extends React.Component {

    render() {
        const {plants} = this.props;

        return (

            <FormGroup>
                <Label for="plant">Type of plant:</Label>
                <Field
                    component={PlantationSelect}
                    required
                    id="plant"
                    items={plants}
                    name={MyPlantFormFields.PLANT}

                >
                    <option value='' hidden>Plant Type....
                    </option>
                </Field>

            </FormGroup>
        )
    }
}

export default PlantTypeField;