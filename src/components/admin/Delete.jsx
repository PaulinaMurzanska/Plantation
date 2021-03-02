import React from "react";
import {Card, Container, NavItem} from "reactstrap";
import DeleteButtons from "components/sharedElements/DeleteButtons";
import {Link, Redirect} from "react-router-dom";
import {ROUTE_PLANTS} from "constants/Routes";

export const Delete = () => {

    return (
        <Container>
            <Card>
                <h3>You have successfully deleted your plant. Click to return</h3>
                <h2> Delete didnt happen , this page only simulates what actions will happen
                    after successful delete.
                </h2>
                <NavItem tag={Link}
                         to={ROUTE_PLANTS}>
                    <DeleteButtons
                        submitLabel="Back to Plants List"
                    />

                </NavItem>
            </Card>

        </Container>


    )
}