import { Fragment } from "react";
import { Outlet , Link } from "react-router-dom"
import {  ReactComponent as CrownLogo} from "../../assets/crown.svg"
import "./navigation.styles.scss"
const Navigation = () => {
    return   (
        <Fragment>
            <div className="navigation">
                <div className="logo-container"> 
                   <CrownLogo className="logo" />
                </div>
                <div className=" nav-links-container"> 
                      <Link className="nav-link" to="/shop">Shop</Link>
                </div>   
                <div className="nav-links-container">
                    <Link  to="/sign-in">Sign-in</Link>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </Fragment>
    )
}
export default Navigation;
