import React from "react";

class Test extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const{hello}=this.props;
        console.log(this.props);
        return(
            <p>helloooo and {hello}</p>
        )
    }
}
export default Test