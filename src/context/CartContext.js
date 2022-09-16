import React, { useState } from "react";

export const CartContext = React.createContext([]);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState();

    return <CartContext.Provider>{children}</CartContext.Provider>;
};
