import React from "react";
import { FormGroup, Label } from "reactstrap";
import { Field } from "formik";
import { plantTemperatureOptions} from "constants/PlantsParameters";
import Select from "components/sharedElements/Select";
import PlantFormFields from "constants/PlantFormFields";

const TemperatureField= (props) => {
  const plantTemperatureId = "plantTemperature";
  return (
    <FormGroup>
      <Label for={ plantTemperatureId }>Temperature:</Label>
      <Field
        component={ Select }
        id={ plantTemperatureId }
        items={ plantTemperatureOptions }
        name={ PlantFormFields.REQUIRED_TEMPERATURE }
      />
    </FormGroup>
  );
};

TemperatureField.propTypes = {};

export default TemperatureField;
