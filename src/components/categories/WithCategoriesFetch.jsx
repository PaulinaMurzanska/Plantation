// import React from "react";
import axios from "axios";
import {Api} from "services/Api";

// const category_fetch_delay_simulator = 500;
//
// const delayFetch = (ms, func) => {
//     return new Promise((resolve, reject) => setTimeout(() => func(resolve, reject), ms));
// // }
// const withCategories = (WrappedComponent) => {
//     return class extends React.Component {
//         constructor(props) {
//             super(props);
            // this.state = {
            //     categoriesInProgress: false,
            //     categoriesSuccess: undefined,
            //     categories: [],
            // }
        // }
        // fetchCategories = () => {
        //     this.setState({categoriesInProgress: true});
        //     return delayFetch(category_fetch_delay_simulator, (resolve, reject) => {
        //         return axios.get(Api.CATEGORIES)
        //             .then((response) => {
        //                 const data = response.data;
        //                 const categories = data.map((item) => ({
        //                     name: item.name, id: item.id,
        //                     image_url: item.image_url,
        //                     slug: item.slug,
        //
        //                 }));
        //                 const categoriesSuccess = true;
        //                 this.setState({categories, categoriesSuccess});
        //                 resolve();
        //             })
        //             .catch((error) => {
        //                 this.setState({categoriesSuccess: false});
        //                 reject();
        //             })
        //     }).finally(() => {
        //         this.setState({categoriesInProgress: false});
        //     })
        // }
//         render() {
//             // console.log(this.state.categories);
//             return (
//                 <p>nothing</p>
//
//             )
//         }
//     }
// }
// export default withCategories;