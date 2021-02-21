import React from "react";


class CategoriesSelect extends React.PureComponent {
    constructor(props) {
        super(props);

    }
    render() {

 const category=this.props.category;

        return(
            <option value={category.id}>
                {category.name}
            </option>

        )

    }
}
export default CategoriesSelect;