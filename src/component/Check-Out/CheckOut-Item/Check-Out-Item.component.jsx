
import "./CheckOutItem.styles.scss"
const CheckOutItem = ({ product, changeQuantity }) => {

    const { name, price, quantity, imageUrl } = product;

    return (
        <div className="checkout-item-container">
            <div className="image-container" >
                <img src={imageUrl} alt={name} />
            </div>
            <div className="name">{name}</div>
            <div className="quantity">
                <span className="arrow" onClick={() => { changeQuantity._removeFromCart(product) }}>{"<"}</span>
                <span className="value">{quantity}</span>
                <span className="arrow" onClick={() => { changeQuantity._addItemtoCart(product) }}>{">"}</span>
            </div>
            <span className="price">{price}</span>
            <button className="remove-button" onClick={() => { changeQuantity._deleteItem(product) }}>DELETE</button>
        </div>
    )
}

export default CheckOutItem;