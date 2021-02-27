import React from "react";
import { FormGroup, Label } from "reactstrap";
import { Field } from "formik";
import { plantHumidityOptions} from "constants/PlantsParameters";
import Select from "components/sharedElements/Select";
import PlantFormFields from "constants/PlantFormFields";

const HumidityField = (props) => {
  const plantHumidityId = "plantHumidity";
  return (
    <FormGroup>
      <Label for={ plantHumidityId }>Humidity:</Label>
      <Field
        component={ Select }
        id={ plantHumidityId }
        items={ plantHumidityOptions }
        name={ PlantFormFields.REQUIRED_HUMIDITY }
      />
    </FormGroup>
  );
};

HumidityField.propTypes = {};

export default HumidityField;
