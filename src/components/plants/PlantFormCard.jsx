import React from 'react';
import {Form, Formik} from 'formik';
import {Button, Container} from "reactstrap";
import Buttons from "components/sharedElements/Buttons";
import PlantForm from "components/admin/PlantForm";
import {humidity} from "constants/PlantsParameters";
import {ROUTE_PLANTS} from "constants/Routes";

class PlantFormCard extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        const {
            categories,
            initial,
            selectedPlantId,
            plantIdToEdit,
            plants,
            plant
        } = this.props;

        const initialValues = initial;

        const onSubmit = (values) => {
            const plant = values;
            this.props.onSubmit(plant);
        };


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
