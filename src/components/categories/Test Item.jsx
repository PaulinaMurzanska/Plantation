import React, {useState} from 'react';
import {Button, Collapse, Card, CardBody, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";
import {ROUTE_TEST} from "constants/Routes";
import {Switch, Route} from 'react-router-dom'

// import './Plant.scss';



class TestItem extends React.PureComponent {

    render() {
        const {record, filtItem} = this.props;

        return (
            <ListGroupItem>
                {record}
                {filtItem}
            </ListGroupItem>
        )
    }


}

export default TestItem;