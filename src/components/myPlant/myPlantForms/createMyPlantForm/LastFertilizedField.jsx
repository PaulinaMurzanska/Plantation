import React from 'react';
import { Label } from 'reactstrap';
import MyPlantFormFields from "constants/MyPlantFormFields";
import PlantationDatePicker from "components/sharedElements/DatePicker";

const LastFertilizedField = (props) => {
  const plantLastFertilizedId = "last_fertilized";
  return (
    <React.Fragment>
      <Label for={ plantLastFertilizedId }>Last fertilized at:</Label>
      <PlantationDatePicker
        id={ plantLastFertilizedId }
        name={ MyPlantFormFields.LAST_FERTILIZED }
        dateFormat="yyyy-MM-dd"
        placeholderText="YYYY-MM-DD"
        className="form-control"
      />
    </React.Fragment>
  );
};

LastFertilizedField.propTypes = {};

export default LastFertilizedField;