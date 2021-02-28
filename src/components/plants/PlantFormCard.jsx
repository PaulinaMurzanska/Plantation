import React from 'react';
import {Form, Formik} from 'formik';
import {Button, Container} from "reactstrap";
import Buttons from "components/sharedElements/Buttons";
import PlantForm from "components/admin/PlantForm";
import {humidity} from "constants/PlantsParameters";

class PlantFormCard extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        const {
            categories,
            initialValues,
            selectedPlantId,
            plantIdToEdit,
            plants,
        } = this.props;
        console.log(plants);
        console.log(initialValues);

        const onSubmit = (values) => {
            const plant = values;
            this.props.onSubmit(plant);
        };


        const key = initialValues.id;
        console.log(key);

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


                        />
                        <Container>
                            <div className='form-buttons'>

                                <Buttons
                                    cancelLabel="Cancel"
                                    submitDisabled={!isValid}
                                    submitLabel={key === undefined ?'Create new plant' : 'Save changes'}
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
