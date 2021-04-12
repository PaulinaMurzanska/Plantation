import React from "react";



class CategoriesSelectOptions extends React.PureComponent {

    render() {
        const {category}=this.props;


        return(
            <option value={category.id}>
                {category.name}
            </option>

        )

    }
}
export default CategoriesSelectOptions;