import React from "react";
import { Button, FormGroup ,NavItem} from "reactstrap";
import{Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {ROUTE_PLANTS} from "constants/Routes";

/**
 * @component
 */
const PlantFormButtons = ({ cancelLabel, submitDisabled, submitLabel }) => {
  return (
    <React.Fragment>
      <hr className="mb-4 mt-4" />
      <FormGroup className="mb-2">
        <Button type="submit" disabled={ submitDisabled }
                style={{marginRight:'15px',backgroundColor:"#387f34"}}>
          { submitLabel }
        </Button>
          <NavItem tag={Link} to={ROUTE_PLANTS}>
              <Button color="secondary" type="reset" className="ml-0 ml-md-2"  style={{paddingRight:'15px'}}>
          { cancelLabel }
        </Button>
          </NavItem>

      </FormGroup>
    </React.Fragment>
  );
};

PlantFormButtons.propTypes = {
  cancelLabel: PropTypes.string.isRequired,
  submitLabel: PropTypes.string.isRequired,
  submitDisabled: PropTypes.bool.isRequired,
};

export default React.memo(PlantFormButtons);