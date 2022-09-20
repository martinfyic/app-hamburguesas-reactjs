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

    const addItemToCart = (product, counter) => {
        const inCart = cart.find(
            (productInCart) => productInCart.id === product.id
        );

        if (inCart) {
            setCart(
                cart.map((productInCart) => {
                    if (
                        product.stock > productInCart.quantity &&
                        productInCart.quantity + counter > product.stock
                    ) {
                        return {
                            ...inCart,
                            quantity: product.stock,
                        };
                    }
                    if (
                        productInCart.id === product.id &&
                        product.stock > productInCart.quantity
                    ) {
                        return {
                            ...inCart,
                            quantity: inCart.quantity + counter,
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
                    quantity: counter,
                },
            ]);
        }
    };

    const deleteItemToCart = (product) => {
        const inCart = cart.find(
            (productInCart) => productInCart.id === product.id
        );

        if (inCart.quantity === 1) {
            setCart(
                cart.filter((productInCart) => productInCart.id !== product.id)
            );
        } else {
            setCart((productInCart) => {
                if (productInCart.id === product.id) {
                    return { ...inCart, quantity: inCart.quantity - 1 };
                } else return productInCart;
            });
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{ cart, addItemToCart, deleteItemToCart, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
};
