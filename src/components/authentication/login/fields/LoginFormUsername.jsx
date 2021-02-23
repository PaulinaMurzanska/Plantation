import React from "react";
import { FormGroup, Label } from "reactstrap";
import { Field } from "formik";
import PlantationInput from "components/shared/form/PlantationInput";
import loginFormFields from 'components/authentication/constants/LoginFormFields';

const LoginFormUsername = (props) => {
  const id = "userLoginUsername";
  return (
    <FormGroup>
      <Label for={ id }>
        Login:
      </Label>
      <Field
        component={ PlantationInput }
        id={ id }
        name={ loginFormFields.USERNAME }
        placeholder="Your username"
        type="text"
      />
    </FormGroup>
  );
};

LoginFormUsername.propTypes = {};

export default LoginFormUsername;
