import React from "react";
import {Button, Container, FormGroup, Label, NavItem} from "reactstrap";
import {Field, Form} from "formik";
import PlantationInput from "components/shared/form/PlantationInput";
import "components/formik/Formik.scss";
import {Link} from "react-router-dom";
import {ROUTE_CATEGORIES, ROUTE_PLANTS} from "constants/Routes";


class CategoryForm extends React.Component {
    render() {
        return (
            <Container>

                <FormGroup className="form-wrapper">
                    <div className='head'>
                        <h4>Create New Plant</h4>
                        <div className='action-buttons'>
                            <NavItem tag={Link} to={ROUTE_CATEGORIES}>
                                <Button style={{backgroundColor: "#387f34"}}>Back to Categories</Button>
                            </NavItem>
                        </div>
                    </div>

                    <div className='section1'>
                        <div className='label'>Categories Information:</div>
                        <div>
                            <div className='url-category'>
                                <Label for='category'>Name:</Label>
                                <Field
                                    component={PlantationInput}
                                    name='name'
                                    id="category"
                                    placeholder="Succulents"
                                    type="text"
                                />
                                <Label for='url'>URL:</Label>
                                <Field
                                    component={PlantationInput}
                                    id="url"
                                    name='image_url'
                                    placeholder="Succulents"
                                    type="text"
                                />
                                 <Label for='slug'>Slug:</Label>
                                <Field
                                    component={PlantationInput}
                                    id="slug"
                                    name='slug'
                                    placeholder=""
                                    type="text"
                                />
                                   <Label for='description'>Description:</Label>
                                <Field
                                    component={PlantationInput}
                                    id="description"
                                    name='description'
                                    placeholder=""
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                </FormGroup>
            </Container>

        )


    }


}


export default CategoryForm;