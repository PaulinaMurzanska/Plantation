import React from "react";
import {Input, ListGroup, ListGroupItem} from "reactstrap";
import {Card, CardBody, FormGroup, Label} from "reactstrap";
import TestItem from "components/categories/Test Item";

const records = ["ola", "pola", "Adam", "marek"];

const filt = [];
const hello = [1, 2, 3];

const names = ['James', 'John', 'Paul', 'Ringo', 'George'];

class Test extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            nameDelayed: "",
            filt: [],
            nameToCompare:'',


        };
    }


    handleUserFullNameChange = (event) => {
        const nameSet = event.target.value;
        this.setState({
            nameToCompare: nameSet

        });

    };

    handleUserFullNameBlur = (event) => {
        const nameSet = this.state.name;
        this.setState({
            nameDelayed: nameSet
        });
    };
    handleFilter = (event) => {
        const compareName = this.state.name;
        console.log("filter triggered");
        console.log(compareName);
        const filt = records.filter(record => record.includes(compareName))
        this.setState({
            filt: filt,
        })
        console.log(filt);

    }


    render() {
        const {filt, nameToCompare} = this.state;


        return (
            <Card className="mb-4">

                <CardBody>
                    <FormGroup>
                        <Label for="name">Full Name:</Label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            onChange={this.handleUserFullNameChange}
                            onBlur={this.handleUserFullNameBlur}
                        />
                        <p>Name on change: {this.state.name}</p>
                        <p>Name on blurr: {this.state.nameDelayed}</p>
                    </FormGroup>
                </CardBody>
                <br/>
                <button
                    onClick={this.handleFilter}
                >search
                </button>

                <div>
                    filtered records: {filt}
                </div>
                <br/>
                <ListGroup>

                    {/*{*/}
                    {/*    records.map((record, index) => <TestItem*/}
                    {/*        record={record}*/}
                    {/*    />)*/}
                    {/*}*/}
                    {
                        records.filter(record=>record.toLowerCase().includes(nameToCompare)).map(filteredRecord=>(
                            <TestItem
                            record={filteredRecord}
                            />
                        ))
                    }
                </ListGroup>


            </Card>
        )
    }
}

export default Test;