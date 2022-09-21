import React, { useEffect, useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        try {
            const prodLocalStorage = localStorage.getItem("cartProducts");
            return prodLocalStorage ? JSON.parse(prodLocalStorage) : [];
        } catch (error) {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cart));
    }, [cart]);

    const addItemToCart = (product) => {
        const inCart = cart.find(
            (productInCart) => productInCart.id === product.id
        );

        if (inCart) {
            setCart(
                cart.map((productInCart) => {
                    if (
                        productInCart.id === product.id &&
                        product.stock > productInCart.quantity
                    ) {
                        return {
                            ...inCart,
                            quantity: inCart.quantity + 1,
                        };
                    }
                    return productInCart;
                })
            );
        } else {
            setCart([
                ...cart,
                {
                    ...product,
                    quantity: 1,
                },
            ]);
        }
    };

    const deleteItemToCart = (product) => {
        const inCart = cart.find(
            (productInCart) => productInCart.id === product.id
        );

        if (!isInCart(product)) return;
        if (inCart.quantity === 1) {
            setCart(
                cart.filter((productInCart) => productInCart.id !== product.id)
            );
        } else {
            setCart(
                cart.map((productInCart) => {
                    if (productInCart.id === product.id) {
                        return { ...inCart, quantity: inCart.quantity - 1 };
                    } else return productInCart;
                })
            );
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.find((productInCart) => productInCart.id === itemId.id);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItemToCart,
                deleteItemToCart,
                clearCart,
                isInCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
