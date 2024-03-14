import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/Firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    var [user, setUser] = useState({});
    function createUser(item) {
        return createUserWithEmailAndPassword(auth, item.email, item.password)
    }
    function signIn(obj) {
        return signInWithEmailAndPassword(auth, obj.email, obj.password);
    }
    function logout() {
        console.log("Logging out");
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    })
    return (<UserContext.Provider value={{ user, createUser, signIn, logout }}>
        {children}
    </UserContext.Provider>)
}
export const UserAuth = () => {
    return useContext(UserContext)
}