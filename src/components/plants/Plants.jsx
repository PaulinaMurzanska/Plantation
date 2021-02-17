import React from "react";
import {Card, CardBody, Table} from "reactstrap";
import axios from "axios";
// import PlantRow from "/home/dev/Desktop/plantation/src/components/plants/PlantRow";
// import PlantRow from "/home/dev/Desktop/plantation/src/components/plants/PlantRow";

import PlantRow from "components/plants/PlantRow";



const PLANTS_FETCH_DELAY = 300;

class Plants extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            plants: [],
            plantsInProgress: undefined,
            plantsSuccess: undefined,
        }
    }

    componentDidMount() {
        this.fetchPlants();
    }

    fetchPlants() {
    const requestUrl = "http://gentle-tor-07382.herokuapp.com/plants/";
    this.setState({inProgress: true});


    return this.props.delayFetch(PLANTS_FETCH_DELAY, (resolve, reject) => {
      const promise = axios.get(requestUrl);

      promise
              .then((response) => {

                const data = response.data;
                const plants = data.map((item) => {
                  const {
                    id, name, difficulty, blooming, category, category_slug, fertilizing_interval, last_fertilized,
                    last_watered, required_exposure, required_humidity, required_temperature, room, watering_interval
                  } = item;
                  ;


                  return {
                    id, name, difficulty, blooming, category, category_slug, fertilizing_interval, last_fertilized,
                    last_watered, required_exposure, required_humidity, required_temperature, room, watering_interval
                  };

                });

                const successPlants = true;
                this.setState({plants, successPlants});
                resolve();
              })
              .catch((error) => {

                // debugger;

                this.setState({successPlants: false});
                reject();
              })
              .finally(() => {
                this.setState({inProgress: false});
              })
    });

  }


    render() {
        const {plants, successPlants, inProgress} = this.state;
        return (
            <Card className="mb-4">

                <CardBody>
                {/*<InProgress inProgress={inProgress}/>*/}
                {
                  successPlants === false &&
                  <p>Unable to fetch plants.</p>
                }
                {successPlants && (
                        <>
                          <Table bordered>
                            <thead>


                            <tr>
                              <th>Ind</th>
                              <th>Id</th>
                              <th>Name </th>

                            </tr>
                            </thead>
                            <tbody>
                            {
                              plants.map(
                                      (plant, index, arr) => (<PlantRow plant={plant} key={index} index={index+1}/>)
                              )
                            }
                            </tbody>

                          </Table>



                        </>

                )}
              </CardBody>
            </Card>
        )
    }
}

export default Plants;