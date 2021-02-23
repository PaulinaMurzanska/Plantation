import React from "react";
import { FormGroup, Label } from "reactstrap";
import { Field } from "formik";
import PlantationInput from "components/shared/form/PlantationInput";
import loginFormFields from 'components/authentication/constants/LoginFormFields';

const LoginFormPassword = (props) => {
  const id = "userLoginPassword";
  return (
    <FormGroup>
      <Label for={ id }>
        Password:
      </Label>
      <Field
        component={ PlantationInput }
        id={ id }
        name={ loginFormFields.PASSWORD }
        placeholder="Your password"
        type="password"
      />
    </FormGroup>
  );
};

LoginFormPassword.propTypes = {};

export default LoginFormPassword;
