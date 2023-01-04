import { Fragment, useContext,useEffect} from "react";
import { Outlet, Link, useNavigate} from "react-router-dom";
import { UserContext } from "../../component/Context/user-context.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../component/Context/CartContext";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import DropDown from "../../component/Cards/Drop-Down/DropDown.component";
import "./navigation.styles.scss";
import CartIcon from "../../component/Cards/Cart-Icon/Cart-Icon.component";

const Navigation = () => {
    const { currentUser ,setcurrentUser} = useContext(UserContext);
    const {Toogle} = useContext(CartContext);
    const navigation = useNavigate();

    useEffect(() => {
     if(currentUser!=null)
     {
        navigation("/");

     }
    }, [currentUser])
    
    const signOutHandler =async ()=>{
            await signOutUser();   
            setcurrentUser(null);
    }
    const gotoHome =()=>{
        return navigation("/");
    }

    return (
        <Fragment>
            <div className="navigation">
                <div className="logo-container">
                    <CrownLogo className="logo" onClick={gotoHome}/>
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
                    <CartIcon />
                </div>
                {
                    Toogle? ( <DropDown/>) :(<Fragment/>)
                }
              
            </div>
                    
            <div>
            <br/>
            <br/>
                 <Outlet />
            </div>
        </Fragment>
    )
}
export default Navigation;
