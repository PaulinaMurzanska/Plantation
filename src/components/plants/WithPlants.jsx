// import React from "react";
// import axios from "axios";
//
//
//
// const PLANTS_FETCH_DELAY = 50;
//
// const delayFetch = (ms, func) => {
//     return new Promise((resolve, reject) => setTimeout(() => func(resolve, reject), ms));
// }
//
// const withPlants = (WrappedComponent) => {
//     return class extends React.Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 plantsInProgress: false,
//                 plantsSuccess: undefined,
//                 plants: [],
//
//
//             }
//
//         }
//
//         fetchPlants = () => {
//             const requestUrl = "https://still-fortress-69660.herokuapp.com/plant";
//             this.setState({plantsInProgress: true});
//
//
//             return delayFetch(PLANTS_FETCH_DELAY, (resolve, reject) => {
//                 const promise = axios.get(requestUrl);
//
//                 promise
//                     .then((response) => {
//
//                         const data = response.data;
//                         const plants = data.map((item) => {
//                             const {
//                                id,name, description, watering_interval, fertilizing_interval, difficulty,
//                                 blooming, category, required_exposure, required_humidity, required_temperature
//                             } = item;
//                             ;
//
//
//                             return {
//                               id,name, description, watering_interval, fertilizing_interval, difficulty,
//                                 blooming, category, required_exposure, required_humidity, required_temperature
//                             };
//
//                         });
//
//                         const plantsSuccess = true;
//                         this.setState({plants, plantsSuccess});
//                         resolve();
//                     })
//                     .catch((error) => {
//
//                         // debugger;
//
//                         this.setState({plantsSuccess: false});
//                         reject();
//                     })
//                     .finally(() => {
//                         this.setState({plantsInProgress: false});
//                     })
//             });
//
//         }
//
//
//         render() {
//
//             return (
//                 <WrappedComponent
//                     {...this.state}
//                     {...this.props}
//                     fetchPlants={this.fetchPlants}
//
//
//                 />
//
//
//             )
//         }
//     }
//
// }
//
// export default withPlants;