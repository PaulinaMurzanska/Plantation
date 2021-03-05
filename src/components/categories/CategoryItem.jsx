import {Button,NavItem} from "reactstrap";
import { ROUTE_CATEGORY_EDIT} from "constants/Routes";
import {Link} from "react-router-dom";
import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {BiTrash} from "react-icons/bi";

const CategoryItem = ({handleCategoryEdit, category, onCategoryDelete}) => {

    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal)
    };
    const {name, id, slug} = category;

    return (
        <tr>
            <td>{name}</td>
            <td>
                <div>
                    <NavItem tag={Link} to={ROUTE_CATEGORY_EDIT}>
                        <Button id={id} name={slug} onClick={handleCategoryEdit}>Edit</Button>
                    </NavItem>

                    <div className="trash">
                        <BiTrash className='delete' onClick={toggle}
                        style={{
                            fontSize:"2.2rem",
                            marginLeft:"15px",
                        }}

                        />
                        <Modal isOpen={modal} toggle={toggle}

                        >
                            <ModalHeader toggle={toggle}>You are about to delete {name}</ModalHeader>
                            <ModalBody>
                              <span style={{fontSize:'1.5rem',fontWeight:"700"}}>! HIGHLY NOT RECOMMENDED ! </span>
                                if you delete this category, all records that are linked to it will be deleted. You may lose your records irreversibly.
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary"  id={id} name={slug}  onClick={onCategoryDelete}>Yes,delete</Button>{' '}
                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </div>

                </div>


            </td>
        </tr>


    )

}

export default CategoryItem