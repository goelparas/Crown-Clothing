import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../component/Context/user-context.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../component/Context/CartContext";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import DropDown from "../../component/Cards/Drop-Down/DropDown.component";
import "./navigation.styles.scss";
import CardIcon from "../../component/Cards/Card-Icon/Card-Icon.component";




const Navigation = () => {

    const { currentUser ,setcurrentUser} = useContext(UserContext);
    const {Toogle} = useContext(CartContext);

    const signOutHandler =async ()=>{
            await signOutUser();   
            setcurrentUser(null);
    }

    return (
        <Fragment>
            <div className="navigation">
                <div className="logo-container">
                    <CrownLogo className="logo" />
                </div>
                <div className=" nav-links-container">
                    <Link className="nav-link" to="/shop">Shop</Link>

                    {
                        currentUser ?
                            (
                                <span className="nav-link"  onClick={signOutHandler} >SignOut</span>
                            )
                            :
                            (
                                <Link className="nav-link" to="/auth">Sign-in</Link>
                            )
                    }
                    <CardIcon />
                </div>
                {
                    Toogle? ( <DropDown/>) :(<Fragment/>)
                }
              
            </div>
                    
            <div>
                <Outlet />
            </div>
        </Fragment>
    )
}
export default Navigation;
