// import React from "react";
// import './App.scss';
// import {BrowserRouter as Router} from "react-router-dom";
// import PlantationNavbar from "./components/nav/PlantationNavbar";
// import PlantationContainer from "./components/main/PlantationContainer";
//
// class AuthenticatedApp extends React.PureComponent{
//     constructor(props) {
//         super(props);
//
//     }
//     delayFetch(ms, func) {
//     return new Promise((resolve, reject) => setTimeout(() => func(resolve, reject), ms));
//   }
//     render() {
//         return(
//             <Router>
//                 <PlantationNavbar/>
//                 <PlantationContainer
//                 delayFetch ={this.delayFetch}
//                 />
//             </Router>
//         )
//     }
// }
// export default AuthenticatedApp;