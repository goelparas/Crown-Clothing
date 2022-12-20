import { createContext, useState, useEffect } from "react";
import { authStateChange, DocumentFromAuth } from "../../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setcurrentUser: () => null
});

export const UserProvider = ({ children }) => {
    const [currentUser, setcurrentUser] = useState(null);
    const value = { currentUser, setcurrentUser };

    useEffect(() => {
        const Unsubscribe = authStateChange((user) => {
            setcurrentUser(user)
            if(user!==null)
            {

                DocumentFromAuth(user)
            }
        })
        return Unsubscribe; // lifecycle of useEffect -->cpmntdidmount,cmptdidUpdate, cmptdidunmount

    }, []);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}