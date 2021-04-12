import React from "react";
import {Field} from "formik";
import {FormGroup, Label} from "reactstrap";
import PlantFormFields from "constants/PlantFormFields";
import PlantationSelect from "components/formik/PlantationSelect";


class CategoryField extends React.Component {




    render() {
        const {categories} = this.props;



        return (

            <FormGroup>
                <Label for="category">Type of plant:</Label>
                <Field
                    component={PlantationSelect}
                    required
                    id="category"
                    items={categories}
                    name={PlantFormFields.CATEGORY}

                >
                    <option value='' hidden>Plant Category...
                    </option>
                </Field>

            </FormGroup>
        )
    }
}

export default CategoryField;