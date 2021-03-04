import React from "react";
import axios from "axios";
import {Api} from "services/Api";


const room_fetch_delay_simulator =100;

const delayFetch = (ms, func) => {
    return new Promise((resolve, reject)=>setTimeout(()=>func(resolve, reject), ms));
}

const withRoomsFetch = (WrappedComponent)=>{
    return class extends React.Component{
        constructor(props) {
            super(props);
            this.state={
                roomsInProgress:false,
                roomsSuccess:undefined,
                rooms:[],


            }
        }

        fetchRooms = ()=> {
            this.setState({roomsInProgress:true});
            return delayFetch(room_fetch_delay_simulator,(resolve, reject)=>{
                return axios.get(Api.ROOMS)
                    .then((response)=>{
                        const data = response.data;
                        const rooms = data.map((item)=>{
                            const {
                                id, name, description, exposure,humidity, temperature
                            } = item;
                            ;


                            return {
                               id, name, description, exposure,humidity, temperature
                            };

                        });
                        const roomsSuccess = true;
                        this.setState({rooms,roomsSuccess});
                        resolve();
                    })
                    .catch((error)=>{
                        this.setState({roomsSuccess: false});
                        reject();
                    })
            }).finally(()=>{
                this.setState({roomsInProgress:false});
            })

        }
        render() {

            return(
                <WrappedComponent
                    {...this.state}
                    {...this.props}
                    fetchRooms={this.fetchRooms}
                />
            )
        }


    }
}
export default withRoomsFetch;