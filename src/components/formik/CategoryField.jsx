import React from "react";
import {Field} from "formik";
import {FormGroup, Label} from "reactstrap";
import PlantFormFields from "constants/PlantFormFields";
import withCategories from "components/categories/WithCategoriesFetch";
import CategoriesSelect from "components/categories/CategoriesSelect";
import PlantationSelect from "components/formik/PlantationSelect";
// import CategoriesSelectOptions from "components/categories/CategorySelectOptions";




class CategoryField extends  React.Component{
    constructor(props) {
        super(props);

    }

    componentDidMount=()=> {
        this.props.fetchCategories();
    }
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
export default withCategories(CategoryField);