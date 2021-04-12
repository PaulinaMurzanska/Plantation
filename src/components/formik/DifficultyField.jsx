import React from "react";
import {Field} from "formik";
import {FormGroup,  FormText} from "reactstrap";
import PlantFormFields from "constants/PlantFormFields";
import RadioFeedback from "components/sharedElements/RadioFedback";
import {plantDifficultyOptions} from "constants/PlantsParameters";

const plantDifficultyId = "plant_difficulty";
const plantDifficultyName = PlantFormFields.DIFFICULTY;

const plantDifficultyOption = (item) => (
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

const PlantFormDifficultyDescription = React.memo(({field}) => (
    <FormText color="muted">
        {getDescription(field.value) + '.'}
    </FormText>
));

const PlantFormDifficulty = (props) => (

    <FormGroup  tag="fieldset">
         <div className='difficulty'>
             <legend className="legend-form-label required" >Difficulty level:</legend>


            {
                plantDifficultyOptions.map(plantDifficultyOption)
            }
            <Field  name={plantDifficultyName} component={PlantFormDifficultyDescription}/>
         </div>
    </FormGroup>


);

export default React.memo(PlantFormDifficulty);


