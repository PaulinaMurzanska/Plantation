import {Button} from 'reactstrap';
// import {
//     plantDifficultyOptions,
//     plantExposureOptions,
//     plantHumidityOptions,
//     plantTemperatureOptions,
// } from 'constants/PlantConstants';
// import {difficulties} from "constants/PlantsParameters";
import React from 'react';
import {Form, Formik} from 'formik';
// import PlantFormInformation from 'components/plants/plant-form/sections/PlantFormInformation';
// import PlantFormCultivation from 'components/plants/plant-form/sections/PlantFormCultivation';
// import PlantFormMaintenance from 'components/plants/plant-form/sections/PlantFormMaintenance';
import PropTypes from 'prop-types';
// import Effect from 'components/shared/form/Effect';
// import Plant from 'models/Plant';
// import {classToPlain} from 'serializers/Serializer';
// import pick from 'lodash-es/pick';
// import PlantFormFields from "constants/PlantFormFields";

class PlantFormCreate extends React.PureComponent {
    constructor(props) {
        super(props);
        //
        // debugger;
        // this.setupInitialValues();
    }

    //
    // setupInitialValues() {
    //   const firstOf = (arr) => arr[0].id;
    //   const plant = new Plant();
    //   const fieldNames = Object.values(PlantFormFields);
    //
    //   const plain = classToPlain(plant, false);
    //
    //   const initialValues = pick(
    //     plain,
    //     fieldNames
    //   );
    //
    //   this.initialValues = Object.assign(initialValues, {
    //     [PlantFormFields.REQUIRED_EXPOSURE]: firstOf(plantExposureOptions),
    //     [PlantFormFields.REQUIRED_HUMIDITY]: firstOf(plantHumidityOptions),
    //     [PlantFormFields.DIFFICULTY]: firstOf(plantDifficultyOptions),
    //     [PlantFormFields.REQUIRED_TEMPERATURE]: firstOf(plantTemperatureOptions),
    //   });
    //
    // }


    render() {
        const onChange = (currentState, previousState) => {
            const {name} = currentState.values;
            console.log(currentState.values);
            this.props.onPlantNameChange(name);
        };

        const onSubmit = (values) => {
            console.log(values);
        };

        const initialValues = {
            blooming: false,
            category: "",
            description: "",
            difficulty: 1,
            fertilizing_interval: 1,
            name: "",
            required_exposure: "partsun",
            required_humidity: "medium",
            required_temperature: "medium",
            watering_interval: 1,
        }


        return (
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({isValid}) => (
                    <Form className="plant-form">
                        {/*<Effect onChange={onChange}/>*/}
                        {/*<PlantFormInformation/>*/}
                        {/*<PlantFormCultivation/>*/}
                        {/*<PlantFormMaintenance/>*/}
                        {/*<Button color="primary" type="submit" className="mt-3" disabled={!isValid}>*/}
                        {/*    Create new plant*/}
                        {/*</Button>*/}
                        <p>plant form</p>
                    </Form>
                )}
            </Formik>
        );
    }

}

PlantFormCreate.propTypes = {
    onPlantNameChange: PropTypes.func.isRequired,
};

export default PlantFormCreate;


