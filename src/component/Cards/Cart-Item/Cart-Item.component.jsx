
import "./cartItem.styles.scss"
const CartItem = ({product}) => {
    const { price, name,imageUrl,quantity } = product;
    return (
        
        <div className="cart-item-container">
        <img src={imageUrl}/>
        <div className="item-details">
        <span className="name">{name}</span>
        <span>{`${quantity}X${price}`}</span>
        </div>
        </div>
    )
}
export default CartItem;
