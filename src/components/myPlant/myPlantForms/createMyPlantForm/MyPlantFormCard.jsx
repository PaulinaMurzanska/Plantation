import React from 'react';
import {Form, Formik} from 'formik';
import {Button, Container} from "reactstrap";
import Buttons from "components/sharedElements/Buttons";
import PlantForm from "components/admin/PlantForm";
import MyPlantForm from "components/myPlant/myPlantForms/MyPlantForm";


class MyPlantFormCard extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {

        const {
            categories,
            initialValues,
            selectedMyPlantId,
        //     plantIdToEdit,
            myPlants,
            plants,
            rooms,
        //     plant
        } = this.props;
        //

        //
        const onSubmit = (values) => {
            console.log(values);
            const myPlant = values;
            this.props.onSubmit(myPlant);
        };
        //
        //
        // const key = initialValues.id;
        const key = 1;
        //
        const formikProps = {
            key,
            initialValues,
            onSubmit,
        };

        return (

            <Formik {...formikProps}>
                {({isValid}) => (
                    <Form className="plant-form">
                        <MyPlantForm
                            myPlants={myPlants}
                            plants={plants}
                            rooms={rooms}
                        />
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

    }


};


export default React.memo(MyPlantFormCard);