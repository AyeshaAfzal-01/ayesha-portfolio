import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
    const [darkMode, setDarkMode] = useState(false)
    const value = {
        darkMode,
        setDarkMode,
    }
    return (
        <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
    )
}

export default ShopContextProvider