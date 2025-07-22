import {UserContext} from "../context/UserContext.jsx";
import {useContext} from "react";

export const UseUser = ()=>{
    const {userData,setUserData, countItem} = useContext(UserContext);
    return {userData,setUserData,  countItem}
}
