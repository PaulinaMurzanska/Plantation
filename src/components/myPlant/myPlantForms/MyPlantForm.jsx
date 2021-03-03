import React from "react";
import {Button, Container, FormGroup, Label, NavItem} from "reactstrap";
import {Field, Form} from "formik";
import PlantationInput from "components/shared/form/PlantationInput";
import PlantFormFields from "constants/PlantFormFields";
import "components/formik/Formik.scss";
import PlantTypeField from "components/myPlant/myPlantForms/createMyPlantForm/PlantTypeField";
import MyPlantFormFields from "constants/MyPlantFormFields";
import MyRoomField from "components/myPlant/myPlantForms/createMyPlantForm/MyRoomField";
import MyPlantDifficultyField from "components/myPlant/myPlantForms/createMyPlantForm/MyPlantDifficultyField";
import LastWateredField from "components/myPlant/myPlantForms/createMyPlantForm/LastWateredField";
import LastFertilizedField from "components/myPlant/myPlantForms/createMyPlantForm/LastFertilizedField";
import './MyPlantForm.scss';
import {Link} from "react-router-dom";
import {ROUTE_PLANTS,ROUTE_MYPLANTS} from "constants/Routes";


class MyPlantForm extends React.Component {
    render() {
        const {rooms, plants} = this.props;

        return (
            <Container>

                <FormGroup className="form-wrapper">

                    <div className='head'>
                         <h4>Create New Plant</h4>
                        <div className='action-buttons'>
                            <NavItem tag={Link} to={ROUTE_MYPLANTS}>
                                    <Button>Back to plants</Button>
                                </NavItem>
                        </div>
                    </div>


                    {/*<h4 style={{padding:'15px'}}>Create New Plant</h4>*/}
                    <div className='section1'>
                        <div className='label'>Plant's Information:</div>
                        <div className='sub-section1'>

                            <div className='name-description'>
                                <Label for='name'>Name:</Label>
                                <Field
                                    component={PlantationInput}
                                    id="name"
                                    name={PlantFormFields.NAME}
                                    placeholder="Monstera"
                                    type="text"

                                />
                                <Label for='description'>Description:</Label>
                                <Field
                                    component={PlantationInput}
                                    id="description"
                                    name={MyPlantFormFields.DESCRIPTION}
                                    placeholder="Short description"
                                    type="text"

                                />
                            </div>
                            <div className="type-room">

                                <PlantTypeField
                                    plants={plants}
                                />
                                <MyRoomField
                                    rooms={rooms}
                                />
                            </div>
                        </div>
                        <div className='image-url'>
                            <Label for='image'>Image URL:</Label>
                            <Field
                                component={PlantationInput}
                                id="image"
                                name={MyPlantFormFields.IMAGE_URL}
                                placeholder="paste url here"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className='section2'>
                        <div className='label'>Plant's Maintenance:</div>
                        <div className='settings-wrap'>
                            <div className='settings'>
                                <div className='maintain'>
                                    <div className='watering'>
                                        <LastWateredField/>
                                    </div>
                                    <div className="fertilizing">
                                        <LastFertilizedField/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='section3'>
                         <MyPlantDifficultyField/>
                    </div>
                </FormGroup>
            </Container>
        )
    }
}

export default MyPlantForm;