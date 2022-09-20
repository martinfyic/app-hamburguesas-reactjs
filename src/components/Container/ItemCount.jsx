import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./ItemCount.module.css";

export const ItemCount = ({ addProduct, lessProduct, counter, prod }) => {
    const { addItemToCart, cart } = useContext(CartContext);
    console.log(cart);
    return (
        <div className={styles.CardContainer}>
            <>
                {cart.length !== 0 && (
                    <div className={styles.Buttons}>
                        <button
                            onClick={() => {
                                lessProduct();
                            }}
                        >
                            -
                        </button>
                        <p>{cart[0].quantity}</p>
                        <button
                            onClick={() => {
                                addProduct();
                            }}
                        >
                            +
                        </button>
                    </div>
                )}
            </>
            <div className={styles.divButtons}>
                <button
                    onClick={() => addItemToCart(prod, counter)}
                    className={styles.LessButton}
                >
                    Eliminar
                </button>
                <button
                    onClick={() => addItemToCart(prod, counter)}
                    className={styles.AddButton}
                >
                    Agregar
                </button>
            </div>
        </div>
    );
};
