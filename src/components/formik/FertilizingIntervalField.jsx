import React from "react";
import { FormText, Label } from "reactstrap";
import { Field } from "formik";
import PlantationInput from "components/shared/form/PlantationInput";
import PlantFormFields from "constants/PlantFormFields";


const PlantFormFertilizingInterval = (props) => {
  const plantFertilizingIntervalId = "fertilizing_interval";
  return (
    <React.Fragment>
      <Label for={ plantFertilizingIntervalId }>Fertilizing interval:</Label>
      <Field
        component={ PlantationInput }
        id={ plantFertilizingIntervalId }
        name={ PlantFormFields.FERTILIZING_INTERVAL }
        placeholder="1"
        type="number"
      />
      <FormText color="muted">
        Number of days
      </FormText>
    </React.Fragment>
  );
};

PlantFormFertilizingInterval.propTypes = {};

export default PlantFormFertilizingInterval;