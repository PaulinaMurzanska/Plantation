import React from "react";
import {Button, Container, FormGroup, Label, NavItem} from "reactstrap";
import {Field } from "formik";
import PlantationInput from "components/shared/form/PlantationInput";
import "components/formik/Formik.scss";
import {Link} from "react-router-dom";
import {ROUTE_ROOMS} from "constants/Routes";


class RoomForm extends React.Component {
    render() {
        return (

            <Container>

                <FormGroup className="form-wrapper">
                    <div className='head'>
                        <h4>Create New Room</h4>
                        <div className='action-buttons'>
                            <NavItem tag={Link} to={ROUTE_ROOMS}>
                                <Button style={{backgroundColor: "#387f34"}}>Back to Rooms</Button>
                            </NavItem>
                        </div>
                    </div>

                    <div className='section1'>
                        <div className='label'>Rooms Information:</div>
                        <div>
                            <div className='rooms'>
                                <Label for='room'>Name:</Label>
                                <Field
                                    component={PlantationInput}
                                    name='name'
                                    id="room"
                                    placeholder="room"
                                    type="text"
                                />

                            </div>
                        </div>
                    </div>
                </FormGroup>
            </Container>

        )


    }


}


export default RoomForm;