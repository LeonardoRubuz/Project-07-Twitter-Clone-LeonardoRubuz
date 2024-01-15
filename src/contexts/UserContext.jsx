import { createContext } from "react";

export const UserContext = createContext(
    {
        isLogged : false,
        username : null
    }
)