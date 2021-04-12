import React from 'react';
import {Form, Formik} from 'formik';
import { Container} from "reactstrap";
import Buttons from "components/sharedElements/Buttons";
import {ROUTE_ROOMS} from "constants/Routes";
import RoomForm from "components/rooms/roomForm/RoomForm";

class RoomFormCard extends React.Component {

    render() {
        const{initialValues}=this.props
        const onSubmit = (values) => {
            const room = values;
            this.props.onSubmit(room);
        }

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