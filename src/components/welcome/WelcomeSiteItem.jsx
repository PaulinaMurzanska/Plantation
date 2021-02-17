import React from "react";
import theme_pic from "images/plant_theme2.jpg";
import {NavItem} from "reactstrap";
import {Link} from "react-router-dom";

class WelcomeSiteItem extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {pic, borderTop, fontColor, route, title} = this.props
        return (
            <NavItem tag={Link} to={route}>
                <div
                    style={{backgroundColor: `blue`, backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}
                    className="welcome-site-item-wrapper">
                    <div className='welcome-site-item'
                         style={{backgroundImage: `url(${pic})`}}/>
                    <div className='trapezoid'
                         style={{borderTop: borderTop}}
                    />
                    <di
                        style={{color: fontColor}}
                        className="site-link">{title}
                    </di>

                </div>
            </NavItem>

        )
    }
}

export default WelcomeSiteItem;