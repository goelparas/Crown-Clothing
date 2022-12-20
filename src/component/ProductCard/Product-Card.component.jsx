
import Button from "../Button/Button.component";
import "./product-card.styles.scss"
const ProductCard= ({product})=>{
    return (
     <div className="product-card-container">
        <img src={product.imageUrl} alt={product.name} />
            <div className="footer">
                <span>{product.name}   </span>
                <span>{`$${product.price}`}   </span>

            </div>
            <Button buttontype="AddtoCart" />
        </div>
    )
}

export  default ProductCard;
