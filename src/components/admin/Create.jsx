// import React, {useState} from 'react';
// import Effect from "components/shared/form/Effect";
// import {useHistory} from 'react-router-dom';
// import PlantFormCard from "components/plants/PlantFormCard";
// import withPlants from "components/plants/WithPlants";
// import axios from "axios";
// import {generatePath, matchPath, Route, Switch, withRouter} from 'react-router-dom';
// import {ROUTE_PLANTS} from "constants/Routes";
// import Plants from "components/plants/Plants";
//
//
// const PLANTS_FETCH_DELAY = 50;
//
// const delayFetch = (ms, func) => {
//     return new Promise((resolve, reject) => setTimeout(() => func(resolve, reject), ms));
// }
//
// class Create extends React.PureComponent {
//     constructor(props) {
//         super(props);
//         this.state = {
//             createPlantErrorMessage: '',
//                 plants: [],
//         }
//
//     }
//     componentDidMount() {
//         this.props.fetchPlants();
//     }
//
//
//
//     render() {
//         const {plants} = this.props;
//         console.log(plants);
//         console.log(this.props);
//
//           const initialValues = {
//             blooming: false,
//             category: 1,
//             description: '',
//             difficulty: 1,
//             fertilizing_interval: 14,
//             name: "n",
//             required_humidity: "medium",
//             required_exposure: "partsun",
//             required_temperature: "medium",
//             watering_interval: '1',
//               id:undefined,
//         };
//
//
//         const onSubmitPlantCreate = (plant) => {
//             console.log(plant);
//             const path = generatePath(ROUTE_PLANTS);
//             // console.log(path);
//             console.log(plant);
//
//
//             axios.post('https://still-fortress-69660.herokuapp.com/plant', plant)
//                 .then((response) => {
//                     const data = response.data;
//                     const plant = data;
//                     const plants = [...plants];
//                     plants.push(plant);
//                     this.setState({plants: plants});
//                     this.props.history.push(path);
//                 })
//                 .catch((error) => {
//                     const plantsErrorMessage = "Error creating plant";
//                     this.props.history.push(path);
//                     this.setState({
//                         createPlantErrorMessage: plantsErrorMessage,
//                     });
//                 });
//         };
//         return (
//
//
//
//             <PlantFormCard
//             initialValues={initialValues}
//             onSubmit={onSubmitPlantCreate}
//             />
//         )
//     }
// }
//
//
// export default withPlants(withRouter(Create));