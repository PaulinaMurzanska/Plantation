import React from "react";
import withRoomsFetch from "components/rooms/withRooms";
import RoomsSelectOptions from "components/rooms/RoomsSelectOptions";


class RoomsSelect extends React.PureComponent {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        this.props.fetchRooms();
    }




    render() {
        const {rooms} = this.props;
        console.log(rooms);

        return (
            <>
                {
                    rooms.map((room, index) =>

                        <RoomsSelectOptions
                            room={room}
                            key={index}
                        />
                    )
                }



            </>


        )

    }
}

export default withRoomsFetch(RoomsSelect);