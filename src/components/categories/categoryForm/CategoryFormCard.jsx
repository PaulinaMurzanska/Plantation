import React from 'react';
import {Form, Formik} from 'formik';
import {Button, Container} from "reactstrap";
import Buttons from "components/sharedElements/Buttons";
import PlantForm from "components/admin/PlantForm";
import {humidity} from "constants/PlantsParameters";
import CategoryForm from "components/categories/categoryForm/CategoryForm";
import Categories from "components/categories/Categories";
import {ROUTE_CATEGORIES} from "constants/Routes";

class CategoryFormCard extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        const{initialValues}=this.props

        const onSubmit = (values) => {
            const category = values;
            this.props.onSubmit(category);
        };
        // const initialValues = {
        //     name: '',
        //     image_url: "",
        //     slug: "",
        // }


        const key = initialValues.id;
        // const key = 1;

        const formikProps = {
            key,
            initialValues,
            onSubmit,
        };


        return (
            <Formik {...formikProps}>
                {({isValid}) => (
                    <Form>
                        <CategoryForm/>
                        <Container>
                            <div className='form-buttons'>

                                <Buttons
                                    route={ROUTE_CATEGORIES}
                                    cancelLabel="Cancel"
                                    submitDisabled={!isValid}
                                    submitLabel={key ? 'Save changes' : 'Create new category'}
                                />


                            </div>
                        </Container>


                    </Form>

                )}

            </Formik>
        );

    }


};


export default React.memo(CategoryFormCard);