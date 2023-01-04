import { useParams } from "react-router-dom";
import { CategoryContext } from "../../../component/Context/Product.context";
import ProductCard from "../../../component/ProductCard/Product-Card.component";
import { useContext } from "react";
import "./SingleCategory.styles.scss"

const SingleCategory = ()=>
{
    // console.log(useParams());
    const {xyz} = useParams();
    const {categories} = useContext(CategoryContext);
    const product  = categories[xyz];

    // console.log(categories);

    return (
      <div className="single-category-container">
        <h2 className="title">
         <span>{xyz.toLocaleUpperCase()}</span>
        </h2>
        <div className="preview">
        {
          product&&
          product.map((item)=>{
          return <ProductCard product={item} key={item.id}/>
        })}
        </div>
        </div>)
}

export default SingleCategory;
