import { createContext } from "react";

export const UserContext = createContext(
    {
        username : "",
        accountName : "",
        isLogged : true
    }
)