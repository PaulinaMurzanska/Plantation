import React from "react";
import {Button, Container, Table} from "reactstrap";
import InProgress from "components/sharedElements/InProgress";
import CategoryItem from "components/categories/CategoryItem";
import "./Categories.scss"
import {Link} from "react-router-dom";
import {ROUTE_CATEGORY_CREATE} from "constants/Routes";


const Categories = ({
                        categoriesInProgress, categoriesSuccess, categories, onCategoryDelete,
                        handleCategoryEdit
                    }) => {

    return (

        <Container>
            <Button tag={Link} to={ROUTE_CATEGORY_CREATE}>Create New Category</Button>
            <InProgress inProgress={categoriesInProgress}/>
            {
                categoriesSuccess === false &&
                <p>Unable to fetch categories</p>
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
                                onCategoryDelete={onCategoryDelete}
                            />
                        )
                    }

                    </tbody>


                </Table>
            }
        </Container>

    )

}

export default Categories;