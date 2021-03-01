import React from "react";
import {Container, FormGroup, Label} from "reactstrap";
import {Field, Form} from "formik";
import PlantationInput from "components/shared/form/PlantationInput";
import PlantFormFields from "constants/PlantFormFields";
import "components/formik/Formik.scss";
import CategoryField from "components/formik/CategoryField";
import DifficultyField from "components/formik/DifficultyField";
import PlantFormDifficulty from "components/formik/DifficultyField";
import Blooming from "components/formik/BloomingField";
import PlantFormFertilizingInterval from "components/formik/FertilizingIntervalField";
import WateringIntervalField from "components/formik/WateringIntervalField";
import ExposureField from "components/formik/ExposureField";
import TemperatureField from "components/formik/TemperatureField";
import HumidityField from "components/formik/HumidityField";
import Buttons from "components/sharedElements/Buttons";


class PlantForm extends React.Component {
    render() {
        const{selectedPlantId,plants,plant, plantCategory}=this.props;

        return (
            <Container>

                <FormGroup className="form-wrapper">
                    <h4>Create New Plant</h4>
                    <div className='section1'>
                        <div className='label'>Plant's Information:</div>
                        <div>

                            <div className='name-category'>
                                <Label for='id'>Name:</Label>
                                <Field
                                    component={PlantationInput}
                                    id="name"
                                    name={PlantFormFields.NAME}
                                    placeholder="Monstera"
                                    type="text"

                                />
                                <CategoryField
                                  selectedPlantId={selectedPlantId}
                                  plant={plant}
                                  plantCategory={plantCategory}
                                />

                            </div>
                            <div className='blooming-description'>
                                <Blooming/>
                                <div className='description'>
                                    <Label for='id'>Description:</Label>
                                    <Field
                                        component={PlantationInput}
                                        id='description'
                                        name={PlantFormFields.DESCRIPTION}
                                        placeholder="Monstera"
                                        type="text"
                                    />
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='section2'>
                        <div className='label'>Plant's Setting:</div>

                        <div className='settings'>


                            <div className='set-a'>
                                <WateringIntervalField/>
                                <PlantFormFertilizingInterval/>
                            </div>
                            <div className='set-b'>
                                <HumidityField/>
                                <ExposureField/>
                                <TemperatureField/>
                            </div>

                        </div>

                    </div>
                    <div className='section3'>
                        <PlantFormDifficulty/>
                    </div>


                </FormGroup>
            </Container>

        )


    }


}


export default PlantForm;