
import ProductCard from "../../component/ProductCard/Product-Card.component";
import { ProductContext } from "../../component/Context/Product.context";
import { useContext } from "react";
import "./shop.styles.scss"
const Shop =()=>{
 const {product} = useContext(ProductContext);

    return  (
      <div className="products-container">
         {
          product.map((item)=>{
            return(
              <ProductCard product ={item} key={item.id}/>
            )
          })
         }
      </div>
    )
  }
  
  export default Shop;
  