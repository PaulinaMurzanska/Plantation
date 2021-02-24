import React from "react";
import {Card, CardBody, Button} from "reactstrap";
import withCategories from "components/categories/WithCategoriesFetch";
import withPlants from "components/plants/WithPlants";
import './Plants.scss';
import {ROUTE_CREATE, ROUTE_SINGLEPLANT} from "constants/Routes";
import {Link} from "react-router-dom";

import PlantRow from "components/plants/PlantRow";
import CategoriesSelect from "components/categories/CategoriesSelect";
import CategoriesSelectOptions from "components/categories/CategorySelectOptions";




class Plants extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            categoryIdToCompare: undefined,

        }
    }

    componentDidMount() {
        this.props.fetchPlants();
        this.props.fetchCategories();
    }

    handleCategorySort = (event) => {
        const selectedValue = event.target.value;
        console.log(selectedValue);
        this.setState({
            categoryIdToCompare: parseInt(selectedValue),
        })
        if (selectedValue === "") {
            this.setState({categoryIdToCompare: undefined})
        }
    }
    handleResetSearch = () => {
        this.setState({
            categoryIdToCompare: undefined,

        })

    }


    render() {
        const {categoryIdToCompare} = this.state;


        const {
            categories,
            plants,
            successPlants,
            getSinglePlantId,


        } = this.props;
        const categoriesSortedAsc = categories.sort((cat1, cat2) => {
            const sortBy = "name"
            const a = cat1[sortBy];
            const b = cat2[sortBy];
            if (a > b) {
                return 1;
            }
            if (b > a) {
                return -1;
            }
            return 0;
        })


        return (
            <Card className="mb-4">
                <CardBody>
                    <div className='search'>
                        <label htmlFor="name">Search Categories</label>
                        <select id="name" onChange={this.handleCategorySort}>
                            <option value=''>
                                select category
                            </option>

                            {
                                categoriesSortedAsc.map((item, index) =>
                                    <CategoriesSelectOptions
                                        category={item}
                                        index={index}
                                    />
                                    )

                            }

                        </select>

                        <Button
                            onClick={this.handleResetSearch}
                            color="secondary" size="lg">Reset Search</Button>

                    </div>
                    <Button tag={Link} to={ROUTE_CREATE}>Create New Plant</Button>
                    {/*<InProgress inProgress={inProgress}/>*/}
                    {
                        successPlants === false &&
                        <p>Unable to fetch plants.</p>
                    }

                    {
                        successPlants && (
                            <div className="plants-wrapper">
                                {
                                    plants.filter(plant => plant.category === categoryIdToCompare).map((filteredPlant) => (
                                        <PlantRow plant={filteredPlant} categories={categories}
                                                  getSinglePlantId={getSinglePlantId}/>
                                    ))
                                }
                            </div>
                        )}

                    {
                        categoryIdToCompare === undefined && (
                            <div className="plants-wrapper">
                                {
                                    plants.map(
                                        (plant, index, arr) => (
                                            <PlantRow plant={plant} categories={categories} key={index}
                                                      index={index + 1} getSinglePlantId={getSinglePlantId}/>)
                                    )
                                }
                            </div>
                        )
                    }



                </CardBody>
            </Card>
        )
    }
}

export default withCategories(withPlants(Plants));