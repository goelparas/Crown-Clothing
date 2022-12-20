
import "./category.styles.scss";


const Category = ({category}) => {
  const  {title,id,imageUrl} =  category;  // This destructuring create new Object 

    return (
               <div  key={id} className="category-container">
                      <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}>
                       </div>
                            <div className="category-body-container" >
                                <h1>{title}</h1>
                                 <p>Shop</p>
                            </div>
                    </div>
                     
    )
}
export default Category;
