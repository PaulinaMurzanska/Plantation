import React from "react";


class ResultAdd extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {blooming,category,description,fertilizing_interval,name,required_humidity,required_exposure,
            required_temperature,watering_interval,handleChange, handlePost} =this.props;
        return(
             <div>
            <form onSubmit={handlePost}>
                <h2>new entry</h2>
                <label htmlFor=''>Name:</label>
                <input
                autoFocus
                name='name'
                required
                value={name}
                type='text'
                onChange={handleChange}
                />
                <label htmlFor=''>Blooming:</label>
                <input
                autoFocus
                name='blooming'
                value={blooming}
                type="checkbox"
                onChange={handleChange}
                />
                <button type='submit'>submit</button>
            </form>
        </div>
        )
    }


}


export default ResultAdd;