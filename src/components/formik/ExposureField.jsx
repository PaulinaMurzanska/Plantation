import React from "react";
import { FormGroup, Label } from "reactstrap";
import { Field } from "formik";
import { plantExposureOptions} from "constants/PlantsParameters";
import Select from "components/sharedElements/Select";
import PlantFormFields from "constants/PlantFormFields";

const ExposureField = (props) => {
  const plantExposureId = "plantExposure";
  return (
    <FormGroup>
      <Label for={ plantExposureId }>Exposure:</Label>
      <Field
        component={ Select }
        id={ plantExposureId }
        items={ plantExposureOptions }
        name={ PlantFormFields.REQUIRED_EXPOSURE }
      />
    </FormGroup>
  );
};

ExposureField.propTypes = {};

export default ExposureField;
