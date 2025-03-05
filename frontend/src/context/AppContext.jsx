import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  const [storedAccessToken, setStoredAccessToken] = useState(localStorage.getItem("accessToken"));
    
    const value = {
        storedToken, setStoredToken,
        storedAccessToken, setStoredAccessToken
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider