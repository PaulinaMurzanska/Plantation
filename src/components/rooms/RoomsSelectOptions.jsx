import React from "react";



class RoomsSelectOptions extends React.PureComponent {
    constructor(props) {
        super(props);

    }
    render() {
        const {room}=this.props;

 // const category=this.props.category;

        return(
            <option value={room.id}>
                {room.name}
            </option>

        )

    }
}
export default RoomsSelectOptions;