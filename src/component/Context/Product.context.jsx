import { createContext , useState} from "react";
import Products from "./shop.items.json"


export const ProductContext = createContext({
    product:[],
    setproduct:()=>null
})

export const ProductProvider = ({children})=>{
    const [product,setproduct] = useState(Products);
    const  value = {product,setproduct}
    return (
       <ProductContext.Provider value={value}>{children} </ProductContext.Provider>
    )
}