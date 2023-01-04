
import Button from "../Button/Button.component";
import "./product-card.styles.scss"
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";


const ProductCard= ({product})=>{

    const {addItemtoCart} = useContext(CartContext);
    const addproduct =()=>{
     
       return  addItemtoCart(product);
    }

    return ( 
                <div className="product-card-container" key={product.id}>
                <img src={product.imageUrl} alt={product.name}/>
                <Button buttontype="AddtoCart" onClick={addproduct}  />
                <div className="footer">
                   <span>{product.name}</span>
                  <span>{product.price}</span>   
                </div>
                </div>
                )
    
}

export  default ProductCard;
