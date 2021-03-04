import React from 'react';
import {Form, Formik} from 'formik';
import {Button, Container} from "reactstrap";
import Buttons from "components/sharedElements/Buttons";
import PlantForm from "components/admin/PlantForm";
import {humidity} from "constants/PlantsParameters";
import CategoryForm from "components/categories/categoryForm/CategoryForm";
import Categories from "components/categories/Categories";
import {ROUTE_CATEGORIES, ROUTE_ROOMS} from "constants/Routes";
import RoomForm from "components/rooms/roomForm/RoomForm";

class RoomFormCard extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        const{initialValues}=this.props
        const onSubmit = (values) => {
            const room = values;
            this.props.onSubmit(room);
        }



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
                        <RoomForm/>
                        <Container>
                            <div className='form-buttons'>

                                <Buttons
                                    route={ROUTE_ROOMS}
                                    cancelLabel="Cancel"
                                    submitDisabled={!isValid}
                                    submitLabel={key ? 'Save changes' : 'Create new room'}
                                />


                            </div>
                        </Container>


                    </Form>

                )}

            </Formik>
        );

    }


};


export default React.memo(RoomFormCard);