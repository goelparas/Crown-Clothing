import { useEffect } from "react";
import { createContext, useState } from "react";


const FinalProduct =(cartItems ,productToAdd)=>{    
const existingItem = cartItems.find((item)=>{
    return item.id=== productToAdd.id;
})

if(existingItem)
{
    return cartItems.map((item)=>{
    return item.id===productToAdd.id ?{...item,quantity:item.quantity + 1}:item
   })
}
return [...cartItems ,{...productToAdd,quantity:1}]
}

const RemoveFromCart = (cartItem,productToremove)=>{
    
    if(productToremove.quantity===1)
    {
        return( cartItem.filter((item)=>{return item.id!=productToremove.id}));
    }
    else{
        return (cartItem.map((item)=>{return item.id===productToremove.id?{...item,quantity:item.quantity-1}:item}));

    }
  
}

const Delete =(product,cartItem)=>{

    return( cartItem.filter((item)=>{ 
        return  item.id!== product.id;
    }))
}

export const CartContext = createContext({
    Toogle: false,
    setToogle: () => null,
    cartItem:[],
    cartCount: null,
    addItemtoCart:()=>null,
    totalPrice:null,
    removeEachItem:()=>null,
    deleteItem :()=>null
})

const CartProvider = ({ children }) => {
    console.log("cartContext");
    const [Toogle, setToogle] = useState(false);
    const [cartItem ,setCartItem] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice,setTotalPrice] =useState(0);

   
    useEffect(()=>{
       let   newCount  = cartItem.reduce((total, item)=>total+item.quantity,0)
        setCartCount(newCount);
        let newTotal  = cartItem.reduce((total,item)=>total+item.quantity*item.price,0) ;
        setTotalPrice(newTotal);

    },[cartItem]);

const removeEachItem =(productToremove)=>{
    setCartItem(RemoveFromCart(cartItem,productToremove));

}
    const addItemtoCart=(productToAdd)=>{
        
       setCartItem(FinalProduct(cartItem,productToAdd))
    }

    const deleteItem = (product)=>{
        // console.log("delete")
        setCartItem(Delete(product,cartItem));

    }

    const value = { Toogle, setToogle ,cartItem,addItemtoCart ,cartCount,totalPrice , removeEachItem,deleteItem};
   
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
export default CartProvider;
