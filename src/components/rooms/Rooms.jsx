import React from "react";
import withRoomsFetch from "components/rooms/withRooms";
import {Card,CardBody,ListGroup} from "reactstrap";
import InProgress from "components/sharedElements/InProgress";
import RoomsItem from "components/rooms/RoomItem";

class Rooms extends React.PureComponent{

    componentDidMount() {
        this.props.fetchRooms()
    }

    render() {
        const {roomsInProgress,roomsSuccess,rooms} = this.props;

        return(
            <Card>
        <CardBody>
          <div className="app-container">
            <InProgress inProgress={roomsInProgress}/>
            {
              roomsSuccess === false &&
              <p>Nie udało się pobrać Pokoju</p>
            }
            {
              roomsSuccess &&
              <ListGroup className="categories">
                {
                  rooms.map((room, index, arr) =>
                    <RoomsItem
                      room={room}
                      label='category'
                      key={index}
                      isLastItem={arr.length - 1 === index}
                      index={index}
                    />
                  )
                }
              </ListGroup>
            }
          </div>
        </CardBody>
      </Card>
        )
    }
}
export default withRoomsFetch(Rooms);