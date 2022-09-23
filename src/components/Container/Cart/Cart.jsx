import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import styles from "./Cart.module.css";

export const Cart = () => {
    const { cart, deleteItemToCart, addItemToCart, clearCart } =
        useContext(CartContext);
    return (
        <div>
            <div>
                {cart.map((cartItem) => {
                    return (
                        <div key={cartItem.id} className={styles.CartContainer}>
                            <img
                                src={cartItem.pictureUrl}
                                alt={cartItem.title}
                            />
                            <div className={styles.infoContainer}>
                                <p className={styles.infoTitle}>
                                    Producto: {cartItem.title}
                                </p>
                                <div className={styles.infoQuantity}>
                                    <button
                                        onClick={() =>
                                            deleteItemToCart(cartItem)
                                        }
                                    >
                                        -
                                    </button>
                                    <p>Unidades {cartItem.quantity}</p>
                                    <button
                                        onClick={() => addItemToCart(cartItem)}
                                    >
                                        +
                                    </button>
                                </div>

                                <p className={styles.infoSubTotal}>
                                    Total ${cartItem.quantity * cartItem.price}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={styles.TotalInfoContainer}>
                <div className={styles.TotalInfo}>
                    <p>Total productos</p>
                    <p>Total a pagar $</p>
                </div>
                <button onClick={clearCart}>Vaciar</button>
                <button>Finalizar</button>
            </div>
        </div>
    );
};
