import React from "react";
import {ListGroupItem} from "reactstrap";

class CategoryItem extends React.PureComponent {
    constructor(props) {
        super(props);

    }
    render() {

        const category =this.props.category;
        return(
            <ListGroupItem>
                {category.id} {" "} {category.name}
            </ListGroupItem>

        )

    }
}
export default CategoryItem