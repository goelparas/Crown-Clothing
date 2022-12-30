import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import CheckOutItem from "../CheckOut-Item/Check-Out-Item.component";
import "./checkOut.styles.scss";
const  CheckOutContainer  =()=>{
    const {cartItem,totalPrice,addItemtoCart,removeEachItem,deleteItem} = useContext(CartContext);

    const changeQuantity ={
      _addItemtoCart:addItemtoCart,
      _removeFromCart:removeEachItem,
      _deleteItem :deleteItem
    }
    
    return (
        <div className="checkout-container">
            <div className="checkout-header">
            <span className="header-block">Product</span>
            <span className="header-block">quantity</span>
            <span className="header-block">Price</span>
            <span className="header-block">Delete</span>
            </div>
          { cartItem.map((item)=>{

            return (<CheckOutItem key={item.id} product={item} changeQuantity={changeQuantity}/>)
            })
          }
          <div className="total" >{ `TotalPrice----$${totalPrice }`}</div>
        </div>
    )
}

 export default CheckOutContainer;
