import React from "react";
import "components/welcome/welcomeSite.scss";
import themepic1 from "images/plant_theme1.jpg";
import themepic2 from "images/plant_theme2.jpg";
import themepic3 from "images/plant_theme5.jpeg";
import WelcomeSiteItem from "components/welcome/WelcomeSiteItem";
import {ROUTE_CATEGORIES,ROUTE_PLANTS, ROUTE_ROOMS} from "constants/Routes";

class WelcomeSite extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const borderTop = '100px solid #f7faf6';
        const fontColorBlack = "black";

        return (
            <>

                <div className='mycontainer'>

                    <WelcomeSiteItem
                        route={ROUTE_PLANTS}
                        pic={themepic1}
                        borderTop={borderTop}
                        fontColor={fontColorBlack}
                        title={"Types of Plants"}
                    />
                    <WelcomeSiteItem
                        route={ROUTE_CATEGORIES}
                        pic={themepic2}
                        borderTop={borderTop}
                        fontColor={fontColorBlack}
                        title={"Plants Categories"}

                    />
                    <WelcomeSiteItem
                        route={ROUTE_ROOMS}
                        pic={themepic3}
                        borderTop={borderTop}
                        fontColor={fontColorBlack}
                        title={"My Rooms"}

                    />


                </div>
            </>

        )
    }
}

export default WelcomeSite;