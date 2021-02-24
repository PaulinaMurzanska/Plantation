import React from "react";
import {ListGroupItem} from "reactstrap";

class RoomsItem extends React.PureComponent {
    constructor(props) {
        super(props);

    }
    render() {

        const room =this.props.room;
        return(
            <ListGroupItem>
                {room.id} {" "} {room.name}
            </ListGroupItem>

        )

    }
}
export default RoomsItem;