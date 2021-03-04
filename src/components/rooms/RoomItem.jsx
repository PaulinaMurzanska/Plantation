import {Button, NavItem} from "reactstrap";
import { ROUTE_ROOM_EDIT} from "constants/Routes";
import {Link} from "react-router-dom";
import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {BiTrash} from "react-icons/bi";

const RoomItem = ({ room, handleRoomEdit,onRoomDelete}) => {


    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal)

    };
    const {name, id} = room;

    return (
        <tr>
            <td>{name}</td>
            <td>
                <div>
                    <NavItem tag={Link} to={ROUTE_ROOM_EDIT}>
                        <Button id={id} onClick={handleRoomEdit}>Edit</Button>
                    </NavItem>

                    <div className="trash">
                        <BiTrash className='delete' onClick={toggle}
                        style={{
                            fontSize:"2.2rem",
                            // color:"red",
                            marginLeft:"15px",

                        }}

                        />
                        <Modal isOpen={modal} toggle={toggle}

                        >
                            <ModalHeader toggle={toggle}>You are about to delete {name}</ModalHeader>
                            <ModalBody>
                              <span style={{fontSize:'1.5rem',fontWeight:"700"}}>! HIGHLY NOT RECOMMENDED ! </span>
                                if you delete this room, all records that are linked to it will be deleted. You may lose your records irreversibly.
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary"  id={id} onClick={onRoomDelete}>Yes,delete</Button>{' '}
                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </div>

                </div>


            </td>
        </tr>


    )

}

export default RoomItem