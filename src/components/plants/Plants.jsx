import React from "react";
import {Card, CardBody, Button, Container, ListGroup, Alert, UncontrolledAlert} from "reactstrap";
// import withCategories from "components/categories/WithCategoriesFetch";
// import withPlants from "components/plants/WithPlants";
import './Plants.scss';
import {ROUTE_CREATE, ROUTE_FORM,} from "constants/Routes";
import {generatePath, Link} from "react-router-dom";
import PlantRow from "components/plants/PlantRow";
import CategoriesSelect from "components/categories/CategoriesSelect";
import CategoriesSelectOptions from "components/categories/CategorySelectOptions";
import axios from "axios";
import InProgress from "components/sharedElements/InProgress";
import ScrollToTop from "react-scroll-to-top";


class Plants extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            categoryIdToCompare: undefined,
        }
    }

    // componentDidMount() {
    //     this.props.fetchCategories();
    //
    // }

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
            getSinglePlantId,
            plantsInProgress,
            plantsSuccess,
            onCreate,
            deleteMessage,
            selectedPlantId,

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

            <Container>

                <ScrollToTop smooth color="#387f34"/>

                <h2 className='success'>Plants Types</h2>
                {/**/}
                <div className='create-search-tab'>
                    <div className='search'>
                        <label htmlFor="name">Search Categories</label>
                        <select id="name" onChange={this.handleCategorySort}>
                            <option value=''>F
                                select category
                            </option>

                            {
                                categoriesSortedAsc.map((item, index) =>
                                    <CategoriesSelectOptions
                                        category={item}
                                        key={index}
                                    />
                                )

                            }

                        </select>

                        <Button
                            onClick={this.handleResetSearch}
                            color="secondary" size="md">Reset Search</Button>

                    </div>


                    <Button tag={Link} to={ROUTE_CREATE} onClick={onCreate}>Create New Plant</Button>

                </div>
                <InProgress inProgress={plantsInProgress}/>
                {
                    plantsSuccess === false &&
                    <p>Unable to fetch plants.</p>
                }

                {
                    plantsSuccess && (
                        <div className="plant-card">
                            {
                                plants.filter(plant => plant.category === categoryIdToCompare).map((filteredPlant, index) => (
                                    <PlantRow plant={filteredPlant} categories={categories} key={index}
                                              getSinglePlantId={getSinglePlantId}/>
                                ))
                            }
                        </div>
                    )
                }

                {
                    categoryIdToCompare === undefined && (
                        <div className="plant-card">
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


            </Container>


        )
    }
}

export default Plants;