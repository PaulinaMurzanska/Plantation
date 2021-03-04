import React from "react";
import withRoomsFetch from "components/rooms/withRooms";
import {Button, Card, CardBody, Container, ListGroup, Table} from "reactstrap";
import InProgress from "components/sharedElements/InProgress";
import RoomsItem from "components/rooms/RoomItem";
import {Link} from "react-router-dom";
import {ROUTE_CATEGORY_CREATE, ROUTE_ROOM_CREATE} from "constants/Routes";
import CategoryItem from "components/categories/CategoryItem";

class Rooms extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            roomId: undefined,
            roomName: '',
        }
    }

    componentDidMount() {
        this.props.fetchRooms()
    }

    render() {
        const {roomsInProgress, roomsSuccess, rooms,handleRoomEdit,onRoomDelete} = this.props;

        return (
            <Container>
                <Button tag={Link} to={ROUTE_ROOM_CREATE}>Create New Room</Button>
                <InProgress inProgress={roomsInProgress}/>
                {
                    roomsSuccess === false &&
                    <p>Rooms Fetch Failed</p>
                }
                {
                    roomsSuccess &&
                    <Table striped className="categories">
                        <thead>
                        <tr>
                            <th>Rooms</th>
                            <th> Edit and Delete</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            rooms.map((item, index, arr) =>
                                <RoomsItem
                                    room={item}
                                    label='category'
                                    key={index}
                                    isLastItem={arr.length - 1 === index}
                                    index={index}
                                    handleRoomEdit={handleRoomEdit}
                                    onRoomDelete={onRoomDelete}

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

export default withRoomsFetch(Rooms);