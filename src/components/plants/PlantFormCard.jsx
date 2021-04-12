import React from 'react';
import {Form, Formik} from 'formik';
import { Container} from "reactstrap";
import Buttons from "components/sharedElements/Buttons";
import PlantForm from "components/admin/PlantForm";
import {ROUTE_PLANTS} from "constants/Routes";

class PlantFormCard extends React.Component {

    render() {

        const {
            categories,
            initial,
            selectedPlantId,
            plants,
        } = this.props;

        const initialValues = initial;

        const onSubmit = (values) => {
            const plant = values;
            this.props.onSubmit(plant);
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
                    <Form className="plant-form">

                        <PlantForm
                            selectedPlantId={selectedPlantId}
                            plants={plants}
                            categories={categories}


                        />
                        <Container>
                            <div className='form-buttons'>

                                <Buttons
                                    route={ROUTE_PLANTS}
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

    }


};


export default React.memo(PlantFormCard);
