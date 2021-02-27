import React from "react";
import { FormText, Label } from "reactstrap";
import { Field } from "formik";
import PlantationInput from "components/shared/form/PlantationInput";
import PlantFormFields from "constants/PlantFormFields";


const WateringIntervalField = (props) => {
  const plantWateringIntervalId = "watering_interval";
  return (
    <React.Fragment>
      <Label for={ plantWateringIntervalId }>Watering interval:</Label>
      <Field
        component={ PlantationInput }
        id={ plantWateringIntervalId }
        name={ PlantFormFields.WATERING_INTERVAL}
        placeholder="1"
        type="number"
      />
      <FormText color="muted">
        Number of days
      </FormText>
    </React.Fragment>
  );
};

WateringIntervalField.propTypes = {};

export default WateringIntervalField;