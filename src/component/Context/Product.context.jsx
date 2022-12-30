import { createContext , useState,useEffect} from "react";
// import SHOP_DATA from "./shop.items"
import { getCollectionAndDoc } from "../../utils/firebase/firebase.utils";


export const CategoryContext = createContext({
    categories:{},
    setcategories:()=>null
});


export const CategoryProvider = ({children})=>
{
    const [categories,setcategories] = useState([]);
    const  value = {categories, setcategories};

    useEffect(() => {
        const getCollectionAndDocsAsync = async ()=>{
            const categoryMap =   await getCollectionAndDoc();
            setcategories(categoryMap);

        }
        getCollectionAndDocsAsync();
    }, []);
    
    
    console.log("Product Provider");
    return (
       <CategoryContext.Provider value={value}>{children} </CategoryContext.Provider>
    )
}