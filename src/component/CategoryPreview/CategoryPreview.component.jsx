import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/Product-Card.component"
import "./category.preview.styles.scss"

const CategoryPreview = ({products ,Title}) => {
     
    return (

        <div className="category-preview-container">

        <h2 >    
         <Link  className="title" to={`${Title}`}>{Title.toUpperCase()}</Link>
        </h2>
        <div className="preview">
          { 
         products.filter(
          (item, index)=>
          {
                return  index<4;
          }
          )
          .map((item)=>
          {
            return <ProductCard product={item} key={item.id}/>
          }
              )
          }   
          </div>

        </div>
      
    )
}
export default CategoryPreview;
