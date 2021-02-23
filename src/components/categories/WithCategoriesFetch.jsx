import React from "react";
import axios from "axios";

const category_fetch_delay_simulator =500;

const delayFetch = (ms, func) => {
    return new Promise((resolve, reject)=>setTimeout(()=>func(resolve, reject), ms));
}

const withCategories = (WrappedComponent)=>{
    return class extends React.Component{
        constructor(props) {
            super(props);
            this.state={
                categoriesInProgress:false,
                categoriesSuccess:undefined,
                categories:[],
            }
        }

        fetchCategories = ()=> {
            const requestUrl = "https://still-fortress-69660.herokuapp.com/category";
            this.setState({categoriesInProgress:true});
            return delayFetch(category_fetch_delay_simulator,(resolve, reject)=>{
                return axios.get(requestUrl)
                    .then((response)=>{
                        const data = response.data;
                        const categories = data.map((item)=>({name: item.name, id: item.id}));
                        const categoriesSuccess = true;
                        this.setState({categories,categoriesSuccess});
                        resolve();
                    })
                    .catch((error)=>{
                        this.setState({categoriesSuccess: false});
                        reject();
                    })
            }).finally(()=>{
                this.setState({categoriesInProgress:false});
            })

        }
        render() {
            return(
                <WrappedComponent
                    {...this.state}
                    {...this.props}
                    fetchCategories={this.fetchCategories}
                />
            )
        }


    }
}
export default withCategories;