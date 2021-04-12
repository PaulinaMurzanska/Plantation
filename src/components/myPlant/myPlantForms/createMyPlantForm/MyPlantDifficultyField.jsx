import React from "react";
import {Field} from "formik";
import {FormGroup,FormText} from "reactstrap";
import MyPlantFormFields from "constants/MyPlantFormFields";
import RadioFeedback from "components/sharedElements/RadioFedback";
import {plantDifficultyOptions} from "constants/PlantsParameters";

const plantDifficultyId = "difficulty";
const plantDifficultyName = MyPlantFormFields.DIFFICULTY;

const myPlantDifficultyOption = (item) => (
    <Field
        id={plantDifficultyId + item.id}
        key={item.id}
        value={item.id}
        name={plantDifficultyName}
        label={item.name}
        component={RadioFeedback}
        className="custom-control-inline-responsive"
        type="radio"
    />
);

const getDescription = (value) => plantDifficultyOptions.find(item => item.value === value).description;

const myPlantFormDifficultyDescription = React.memo(({field}) => (
    <FormText color="muted">
        {getDescription(field.value) + '.'}
    </FormText>
));

const MyPlantDifficultyField = (props) => (

    <FormGroup tag="fieldset">
        <div className='difficulty'>
            <legend className="legend-form-label required">Difficulty level:</legend>


            {
                plantDifficultyOptions.map(myPlantDifficultyOption)
            }
            <Field
                name={plantDifficultyName}
                component={myPlantFormDifficultyDescription}
            />
        </div>

    </FormGroup>


);
MyPlantDifficultyField.propTypes = {};

export default React.memo(MyPlantDifficultyField);