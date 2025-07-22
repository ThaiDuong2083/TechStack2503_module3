import {createContext, useEffect, useState} from "react";
import {getUserData} from "../route/Route.js";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        gender: '',
        image: '',
        phone: '',
        birthDate: '',
    })
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getUserData();
                setUserData({
                    email: result.email,
                    firstName: result.firstName,
                    lastName: result.lastName,
                    gender: result.gender,
                    image: result.image,
                    phone: result.phone,
                    birthDate: result.birthDate,
                });
            } catch (error) {
                console.error( error);
            }
        };
        fetchData().then();
    }, []);

    return <UserContext.Provider value={{userData, setUserData}}>{children}</UserContext.Provider>;
}
