import CategoryPreview from "../../../component/CategoryPreview/CategoryPreview.component";
import { Fragment ,useContext } from "react";
import { CategoryContext } from "../../../component/Context/Product.context";
const CategoriesPreview = () => {
    const { categories } = useContext(CategoryContext);
    return (
        <Fragment>
            {
                Object.keys(categories).map((categoryTitle) => {
                    return (
                        <CategoryPreview key={categoryTitle} products={categories[categoryTitle]} Title={categoryTitle} />
                    )
                })
            }
        </Fragment>
    )
}
export default CategoriesPreview;
