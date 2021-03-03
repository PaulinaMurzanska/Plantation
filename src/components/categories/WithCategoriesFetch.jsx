import React from "react";
import axios from "axios";
import {generatePath, withRouter} from "react-router-dom";
import {ROUTE_CATEGORIES, ROUTE_PLANTS} from "constants/Routes";
import {Api} from "services/Api";

const category_fetch_delay_simulator = 500;

const delayFetch = (ms, func) => {
    return new Promise((resolve, reject) => setTimeout(() => func(resolve, reject), ms));
}

const withCategories = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                categoriesInProgress: false,
                categoriesSuccess: undefined,
                categories: [],
                // categoryIdToEdit: undefined,


            }
        }

        fetchCategories = () => {
            const requestUrl = "https://still-fortress-69660.herokuapp.com/category";
            this.setState({categoriesInProgress: true});
            return delayFetch(category_fetch_delay_simulator, (resolve, reject) => {
                return axios.get(requestUrl)
                    .then((response) => {
                        const data = response.data;
                        const categories = data.map((item) => ({
                            name: item.name, id: item.id,
                            image_url: item.image_url,
                            slug:item.slug,

                        }));
                        const categoriesSuccess = true;
                        this.setState({categories, categoriesSuccess});
                        resolve();
                    })
                    .catch((error) => {
                        this.setState({categoriesSuccess: false});
                        reject();
                    })
            }).finally(() => {
                this.setState({categoriesInProgress: false});
            })

        }

        // onSubmitCategoryCreate = (category) => {
        //     console.log(category);
        //     const path = generatePath(ROUTE_CATEGORIES);
        //
        //     axios.post(Api.CATEGORIES, category)
        //         .then((response) => {
        //             const data = response.data;
        //             const category = data;
        //             const categories = [...this.state.categories];
        //             categories.push(category);
        //             this.setState({categories: categories});
        //             this.props.history.push(path);
        //         })
        //         .catch((error) => {
        //             console.log('error');
        //             // const plantsErrorMessage = "Error creating plant";
        //             // this.props.history.push(path);
        //             // this.setState({
        //             //     createPlantErrorMessage: plantsErrorMessage,
        //             // });
        //         });
        // };


        handleCategoryEdit = (e) => {
            console.log("clicked cat edit");
            // const categoryId = e.target.id;
            // console.log(categoryId);
            // this.setState({categoryIdToEdit:categoryId})
        }
        onSubmitCategoryUpdate = (category) => {
            console.log("on submit triggered")
            //     console.log(category);
            //       const path = generatePath(ROUTE_CATEGORIES);
            //
            // axios.put(Api.CATEGORIES + category.id + '/', category)
            //     .then((response) => {
            //         const data = response.data;
            //         const category = data;
            //         const categories = [...this.state.categories];
            //         const getIndex = categories.findIndex(item => item.id === category.id);
            //         categories[getIndex] = category;
            //         this.setState({categories: categories});
            //         this.props.history.push(path);
            //     })
            //     .catch((error) => {
            //         // const plantsErrorMessage = "Error updating plant";
            //         this.props.history.push(path);
            //         // this.setState({
            //         //     updatePlantErrorMessage: plantsErrorMessage,
            //         // });
            //     });
        }

        render() {
            console.log(this.state.categories);
            return (
                <WrappedComponent
                    {...this.state}
                    {...this.props}
                    fetchCategories={this.fetchCategories}
                    handleCategoryEdit={this.handleCategoryEdit}
                    onSubmitCategoryUpdate={this.onSubmitCategoryUpdate}
                    // onSubmitCategoryCreate={this.onSubmitCategoryCreate}
                />
            )
        }


    }
}
export default withCategories;