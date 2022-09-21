import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./ItemCount.module.css";

export const ItemCount = ({ addProduct, lessProduct, counter, prod }) => {
    const { addItemToCart, deleteItemToCart, isInCart } =
        useContext(CartContext);

    return (
        <div className={styles.CardContainer}>
            <>
                {isInCart(prod) && (
                    <div className={styles.Buttons}>
                        <button
                            onClick={() => {
                                lessProduct();
                                deleteItemToCart(prod);
                            }}
                        >
                            -
                        </button>
                        <p>{counter}</p>
                        <button
                            onClick={() => {
                                addProduct();
                                addItemToCart(prod);
                            }}
                        >
                            +
                        </button>
                    </div>
                )}
            </>
            {!isInCart(prod) ? (
                <button
                    onClick={() => addItemToCart(prod, counter)}
                    className={styles.AddButton}
                >
                    Agregar
                </button>
            ) : (
                <div className={styles.divButtons}>
                    <button className={styles.SecondaryButton}>Volver</button>
                    <button className={styles.SecondaryButton}>
                        Finalizar
                    </button>
                </div>
            )}
        </div>
    );
};
