import {createContext, useState} from 'react'

export const cartContex = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {}
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const value = { isCartOpen, setIsCartOpen };
    return <cartContex.Provider value={value} >{children}</cartContex.Provider>;
}