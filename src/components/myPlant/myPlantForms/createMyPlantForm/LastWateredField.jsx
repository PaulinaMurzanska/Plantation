import React from 'react';
import { Label } from 'reactstrap';
import MyPlantFormFields from "constants/MyPlantFormFields";
import PlantationDatePicker from "components/sharedElements/DatePicker";
import "react-datepicker/dist/react-datepicker.css";

const LastWateredField = (props) => {
  const plantLastWateredId = "last_watered";
  return (
    <React.Fragment>
      <Label for={ plantLastWateredId }>Last watered at:</Label>
      <PlantationDatePicker
        id={ plantLastWateredId }
        name={ MyPlantFormFields.LAST_WATERED }
        dateFormat="yyyy-MM-dd"
        placeholderText="YYYY-MM-DD"
        className="form-control"
      />
    </React.Fragment>
  );
};

LastWateredField.propTypes = {};

export default LastWateredField;