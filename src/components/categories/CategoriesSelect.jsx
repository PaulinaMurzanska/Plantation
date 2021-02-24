import React from "react";
import withCategories from "components/categories/WithCategoriesFetch";
import CategoriesSelectOptions from "components/categories/CategorySelectOptions";


class CategoriesSelect extends React.PureComponent {
    constructor(props) {
        super(props);


    }

    componentDidMount() {

        this.props.fetchCategories();
    }



    render() {
        const {categories} = this.props;

        return (
            <>
                {
                    categories.map((category, index) =>

                        <CategoriesSelectOptions
                            category={category}
                            key={index}
                        />
                    )
                }



            </>


        )

    }
}

export default withCategories(CategoriesSelect);