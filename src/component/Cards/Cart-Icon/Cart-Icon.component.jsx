import "./cart-icon.styles.scss";
import { ReactComponent as CartLogo } from "../../../assets/shopping-bag.svg";
import  { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
const CartIcon = () => {

     const {Toogle,setToogle,cartCount} = useContext(CartContext);
     const  toogleHandler =()=>{
        // console.log(Toogle);
        setToogle(!Toogle);
     }
    return (
        <div className="cart-icon-container">
            <span className="item-count">{cartCount}</span>
            <CartLogo className="shopping-icon"  onClick={toogleHandler}/>
        </div>
    )
}

export default CartIcon;
