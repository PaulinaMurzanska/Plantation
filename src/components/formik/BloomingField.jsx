import React from 'react';
import {FormGroup} from 'reactstrap';
import {Field} from 'formik';
import Checkbox from "components/sharedElements/Checkbox";

const Blooming = (props) => {
    const htmlId = "blooming";
    return (
        <FormGroup tag="fieldset">
            <legend className="legend-form-label"/>
            <Field
                component={Checkbox}
                id={htmlId}
                label="Is blooming?"
                name="blooming"
            />

        </FormGroup>
    );
};


export default Blooming;
