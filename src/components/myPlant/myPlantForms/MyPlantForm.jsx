import React from "react";
import {Container, FormGroup, Label} from "reactstrap";
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


class MyPlantForm extends React.Component {
    render() {
        const{rooms,plants}=this.props;

        return (
            <Container>
                <p>hello form my plant form</p>

                <FormGroup className="form-wrapper">
                    <h4>Create New Plant</h4>
                    <div className='section1'>
                        <div className='label'>Plant's Information:</div>
                        <div>

                            <div className='name-category'>
                                <Label for='name'>Name:</Label>
                                <Field
                                    component={PlantationInput}
                                    id="name"
                                    name={PlantFormFields.NAME}
                                    placeholder="Monstera"
                                    type="text"

                                />

                                <PlantTypeField
                                  plants={plants}
                                />
                                <MyRoomField
                                rooms={rooms}
                                />

                            </div>

                        </div>

                    </div>

                    <div className='section2'>
                        <div className='label'>Plant's Setting:</div>

                        <div className='settings'>
                            <Label for='image'>Image URL:</Label>
                                <Field
                                    component={PlantationInput}
                                    id="image"
                                    name={MyPlantFormFields.IMAGE_URL}
                                    placeholder="paste url here"
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
                                <MyPlantDifficultyField/>
                                <LastWateredField/>
                                <LastFertilizedField/>


                        </div>

                    </div>



                </FormGroup>
            </Container>

        )


    }


}


export default MyPlantForm;