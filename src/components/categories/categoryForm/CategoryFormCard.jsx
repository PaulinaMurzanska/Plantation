import React from 'react';
import {Form, Formik} from 'formik';
import { Container} from "reactstrap";
import Buttons from "components/sharedElements/Buttons";
import CategoryForm from "components/categories/categoryForm/CategoryForm";
import {ROUTE_CATEGORIES} from "constants/Routes";

class CategoryFormCard extends React.Component {

    render() {
        const{initialValues}=this.props

        const onSubmit = (values) => {
            const category = values;
            this.props.onSubmit(category);
        };


        const key = initialValues.id;

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