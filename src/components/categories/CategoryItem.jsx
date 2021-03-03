import React from "react";
import {Button, ListGroupItem, NavItem} from "reactstrap";
import {ROUTE_CATEGORY_CREATE} from "constants/Routes";
import {Link} from "react-router-dom";

class CategoryItem extends React.PureComponent {
    constructor(props) {
        super(props);

    }

    render() {
        const {handleCategoryEdit, category} = this.props;
        const {name, id} = category;


        return (
            <tr>
                <td>{name}</td>
                <td>
                    <div>
                        <NavItem tag={Link} to={ROUTE_CATEGORY_CREATE}>
                            <Button id={id} onClick={handleCategoryEdit}>Edit</Button>
                        </NavItem>

                        <Button>Delete</Button>

                    </div>
                </td>
            </tr>


        )

    }
}

export default CategoryItem