import React from "react";
import {Field} from "formik";
import {FormGroup, Label} from "reactstrap";
import MyPlantFormFields from "constants/MyPlantFormFields";
import withCategories from "components/categories/WithCategoriesFetch";
// import CategoriesSelect from "components/categories/CategoriesSelect";
import PlantationSelect from "components/formik/PlantationSelect";
import PlantFormFields from "constants/PlantFormFields";

// import CategoriesSelectOptions from "components/categories/CategorySelectOptions";


class PlantTypeField extends React.Component {
    constructor(props) {
        super(props);

    }

    //  componentDidMount = () => {
    //     this.props.fetchCategories();
    // }
    render() {
        const { myPlantPlanttype,selectedMyPlantId,PlantId, plants, myPlant} = this.props;




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