import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";
import styles from "./Cart.module.css";
import { CartEmpty } from "./CartEmpty";
import { CartWithProducts } from "./CartWithProducts";

export const Cart = () => {
    const { cart, deleteItemToCart, addItemToCart, clearCart } =
        useContext(CartContext);
    const [countProducts, setCountProducts] = useState(0);
    const [countPrice, setCountPrice] = useState(0);

    useEffect(() => {
        setCountProducts(cart.reduce((pre, curr) => pre + curr.quantity, 0));
    }, [cart]);

    useEffect(() => {
        setCountPrice(
            cart.reduce((pre, curr) => pre + curr.quantity * curr.price, 0)
        );
    }, [cart]);

    return (
        <>
            {cart.length > 0 ? (
                <>
                    <div>
                        {cart.map((cartItem) => (
                            <CartWithProducts
                                key={cartItem.id}
                                cartItem={cartItem}
                                deleteItemToCart={deleteItemToCart}
                                addItemToCart={addItemToCart}
                            />
                        ))}
                    </div>
                    <div className={styles.TotalInfoContainer}>
                        <div className={styles.TotalInfo}>
                            <p>Total productos {countProducts}</p>
                            <p>Total a pagar ${countPrice}</p>
                        </div>
                        <button onClick={clearCart}>Vaciar</button>
                        <button>Finalizar</button>
                    </div>
                </>
            ) : (
                <CartEmpty />
            )}
        </>
    );
};
