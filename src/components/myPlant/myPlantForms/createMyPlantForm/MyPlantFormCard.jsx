import React from 'react';
import {Form, Formik} from 'formik';
import {Button, Container} from "reactstrap";
import Buttons from "components/sharedElements/Buttons";
import PlantForm from "components/admin/PlantForm";


class MyPlantFormCard extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {

        // const {
        //     categories,
        //     initial,
        //     selectedPlantId,
        //     plantIdToEdit,
        //     plants,
        //     plant
        // } = this.props;
        //
        // const initialValues = initial;
        //
        // const onSubmit = (values) => {
        //     const plant = values;
        //     this.props.onSubmit(plant);
        // };
        //
        //
        // const key = initialValues.id;
        // // const key = 1;
        //
        // const formikProps = {
        //     key,
        //     initialValues,
        //     onSubmit,
        // };

        return (
            <p>hello</p>
            // <Formik {...formikProps}>
            //     {({isValid}) => (
            //         <Form className="plant-form">
            //
            //             <PlantForm
            //                 selectedPlantId={selectedPlantId}
            //                 plants={plants}
            //
            //
            //             />
            //             <Container>
            //                 <div className='form-buttons'>
            //
            //                     <Buttons
            //                         cancelLabel="Cancel"
            //                         submitDisabled={!isValid}
            //                         submitLabel={key ? 'Save changes' : 'Create new plant'}
            //                     />
            //
            //
            //                 </div>
            //             </Container>
            //
            //
            //         </Form>
            //
            //     )}
            //
            // </Formik>
        );

    }


};


export default React.memo(MyPlantFormCard);