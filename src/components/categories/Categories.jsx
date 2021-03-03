import React from "react";
import withCategories from "components/categories/WithCategoriesFetch";
import {Button, Card, CardBody, Container, ListGroup, Table} from "reactstrap";
import InProgress from "components/sharedElements/InProgress";
import CategoryItem from "components/categories/CategoryItem";
import "./Categories.scss"
import {Link} from "react-router-dom";
import {ROUTE_CATEGORY_CREATE, ROUTE_CREATE} from "constants/Routes";

class Categories extends React.PureComponent {

    componentDidMount() {
        this.props.fetchCategories()
    }

    render() {
        const {categoriesInProgress, categoriesSuccess, categories,
            handleCategoryEdit,} = this.props;

        return (

                <Container>
                    <Button tag={Link} to={ROUTE_CATEGORY_CREATE} >Create New Plant</Button>
                        <InProgress inProgress={categoriesInProgress}/>
                        {
                            categoriesSuccess === false &&
                            <p>Nie udało się pobrać Kategorii</p>
                        }
                        {
                            categoriesSuccess &&
                            <Table striped className="categories">
                                <thead>
                                <tr>
                                    <th>Categories</th>
                                    <th> Edit and Delete</th>

                                </tr>
                                </thead>
                                <tbody>
                                {
                                    categories.map((item, index, arr) =>
                                        <CategoryItem
                                            category={item}
                                            label='category'
                                            key={index}
                                            isLastItem={arr.length - 1 === index}
                                            index={index}
                                            handleCategoryEdit={handleCategoryEdit}
                                        />
                                    )
                                }

                                </tbody>


                            </Table>
                        }
                </Container>

        )
    }
}

export default withCategories(Categories);