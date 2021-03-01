import React from "react";
import {Field} from "formik";
import {FormGroup, Label} from "reactstrap";
import MyPlantFormFields from "constants/MyPlantFormFields";
import withCategories from "components/categories/WithCategoriesFetch";
// import CategoriesSelect from "components/categories/CategoriesSelect";
import PlantationSelect from "components/formik/PlantationSelect";
import PlantFormFields from "constants/PlantFormFields";

// import CategoriesSelectOptions from "components/categories/CategorySelectOptions";


class MyRoomField extends React.Component {
    constructor(props) {
        super(props);

    }

    //  componentDidMount = () => {
    //     this.props.fetchCategories();
    // }
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