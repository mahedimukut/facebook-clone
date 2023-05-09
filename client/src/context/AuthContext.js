import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

// Progress 1 //

// 1st step
const INITIAL_STATE = {
    user: {
        "coverPicture": "",
        "_id": "62c5b891291134625678ee1d",
        "username": "jack",
        "email": "jack@gmail.com",
        "password": "$2b$10$44wj4t3Crih5Or.1dUFN0uYPKzkWSGtjjb2teHrb1W2Jl4wHRIqb2",
        "profile": "",
        "cover": "",
        "followers": [],
        "followings": [],
        "isAdmin": false,
        "createdAt": "2022-07-06T16:30:09.134Z",
        "updatedAt": "2022-08-24T13:52:52.546Z",
        "__v": 0,
        "city": "Rome",
        "desc": "The beauty is nothing but Allah!",
        "from": "Bangkok",
        "relationship": 2,
        "profilePicture": "person/1.jpeg"
    },
    isFetching: false,
    error: false
}

// 2nd step
export const AuthContext = createContext(INITIAL_STATE);

// 3rd step
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}>
            {children}
        </AuthContext.Provider>
    )
}