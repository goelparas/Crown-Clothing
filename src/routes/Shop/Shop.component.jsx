import { Route,Routes } from "react-router-dom";

import CategoriesPreview from "./CategoriesPreview/Categories.preview.component";
import SingleCategory from "./SingleCategory/SingleCategory.component";

const Shop = () => {
  // const { categories } = useContext(CategoryContext); // this is an object of an array

  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=":xyz" element={<SingleCategory/>}/>
    </Routes>
  )
}

export default Shop;
