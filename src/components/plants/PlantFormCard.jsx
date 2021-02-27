import React from 'react';
import {Form, Formik} from 'formik';
// import Effect from 'components/shared/form/Effect';
// import ResultAdd from "components/admin/ResultAdd";
import {Button, Container} from "reactstrap";
import Buttons from "components/sharedElements/Buttons";
import PlantForm from "components/admin/PlantForm";

const PlantFormCard = (props) => {

    const onSubmit = (values) => {
        const plant = values;
        props.onSubmit(plant);
    };

    const {
        initialValues,
    } = props;

    const key = initialValues.id;

    const formikProps = {
        key,
        initialValues,
        onSubmit,
    };

    return (
        <Formik {...formikProps}>
            {({isValid}) => (
                <Form className="plant-form">
                    {/*<Effect onChange={onChange}/>*/}
                    <PlantForm/>
                    <Container>
                        <div className='form-buttons'>

                            <Buttons
                                cancelLabel="Cancel"
                                submitDisabled={!isValid}
                                submitLabel={key ? 'Save changes' : 'Create new plant'}
                            />


                        </div>
                    </Container>


                </Form>

            )}

        </Formik>
    );

};


export default React.memo(PlantFormCard);
