import React from "react";
import {Button, Input} from "reactstrap";
import {Formik} from "formik";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
        email: Yup.string().required().email(),
        password: Yup.string().required().min(4),
    }
);

class Create extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={formSchema}
                    onSubmit={(data) => console.log(data)}
                >
                    {
                        ({
                             handleSubmit,
                             handleChange,
                             handleBlur,
                             values,
                            errors,
                            touched
                         }) => {
                            console.log(errors);

                            return (
                                <form className="formik-form" onSubmit={handleSubmit}>
                                    <div className="input-wrapper">
                                        <label htmlFor=''>Email: </label>
                                        <input
                                            type='text'
                                            name={'email'}
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder={"Email..."}

                                        />
                                        {errors.email && touched.email && <p>{errors.email}</p>}
                                    </div>
                                    <div className="input-wrapper">
                                        <label htmlFor=''>Password: </label>
                                        <input
                                            type='password'
                                            name={'password'}
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder={"Password..."}

                                        />
                                        {errors.password && touched.password && <p>{errors.password}</p>}
                                    </div>
                                    <button type={'submit'}>submit</button>

                                </form>
                            )

                        }
                    }

                </Formik>

            </>
        )
    }
}

export default Create;