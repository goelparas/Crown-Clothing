import CategoryItem from "../Category/074 categories.json"
import Category from "../Category/category.component";

const Directory = () => {
    return (
        <div className="Directory-container">
            <div className="categories-container">
            {
                CategoryItem.map((item) => {
                    return (
                        <Category  key={item.id}  category={item}/>
                    )
                })}
            </div>
        </div>
    )

}
export default Directory;
