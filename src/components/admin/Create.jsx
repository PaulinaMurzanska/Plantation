import React from "react";
import PlantFormCreate from "components/forms/plantCreateForm";
import withCategories from "components/categories/WithCategoriesFetch";
import withRoomsFetch from "components/rooms/withRooms";
import ResultAdd from "components/admin/ResultAdd";
import axios from "axios";

class Create extends React.Component {
    state={
        blooming:"false",
        category:1,
        description:'',
        difficulty:1,
        fertilizing_interval:14,
        name:"",
        required_humidity:"medium",
        required_exposure:"partsun",
        required_temperature:"medium",
        watering_interval:'1',
        result:[],
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]:e.currentTarget.value,
        });
    };

    handlePost = (e) =>{
        e.preventDefault()
        console.log('submitting');
        const Data = {
            name: this.state.name,
            blooming:this.state.blooming,
        }
        axios.post("https://still-fortress-69660.herokuapp.com/plant", Data)
            .then((response)=>{
                console.log(response);
                const results = [...this.state.results,
                    {...Data, id:response.data.name},
                ];
                this.setState({
                    name:'',
                    blooming:'',
                    results:results,
                })
            })
    }



    render() {
        console.log(this.state);
        const {blooming,category,description,fertilizing_interval,name,required_humidity,required_exposure,
            required_temperature,watering_interval} = this.state;

        return (

            <div>
                <ResultAdd
                blooming={blooming}
                category={category}
                description={description}
                fertilizing_interval={fertilizing_interval}
                name={name}
                required_humidity={required_humidity}
                required_exposure={required_humidity}
                required_temperature={required_temperature}
                watering_interval={watering_interval}
                handleChange={this.handleChange}
                handlePost={this.handlePost}

                />
            </div>

        )
    }
}

export default withRoomsFetch(withCategories(Create));