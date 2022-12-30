import Button from "../../Button/Button.component";
import "./Drop-Down.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../Cart-Item/Cart-Item.component";
import { useNavigate } from "react-router-dom";

const DropDown =()=>{
    console.log("DropDown");
    
    const {cartItem} = useContext(CartContext); 
    const navigate = useNavigate();

    const goToCheckOut = ()=>{
        return navigate("/checkout");

    }
    return (
        <div className="cart-dropdown-container empty-message">
        <div className="cart-items">
       {
        cartItem.map((item)=>{
            return <CartItem key={item.id} product ={item}/>
        })
       } 
        </div>
            <Button buttontype={"GoToCheckOut"} onClick={goToCheckOut}></Button>
        </div>
    )
}

export default DropDown;
