import { createContext, useState } from "react";


export const CartContext = createContext({
    Toogle: false,
    setToogle: () => null,
    cartItem:[],
    setCartItem:()=>{
        
    }
})


const CartProvider = ({ children }) => {
    const [Toogle, setToogle] = useState(false);
    const [cartItem ,setCartItem] = useState([]);

    const value = { Toogle, setToogle ,cartItem,setCartItem };
   
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
export default CartProvider;
