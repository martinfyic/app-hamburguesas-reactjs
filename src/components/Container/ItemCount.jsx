import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import styles from "./ItemCount.module.css";

export const ItemCount = ({ addProduct, lessProduct, counter, prod }) => {
    const { addItemToCart, deleteItemToCart, isInCart } =
        useContext(CartContext);
    const navigate = useNavigate();

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
                    <button
                        onClick={() => navigate(-1)}
                        className={styles.SecondaryButton}
                    >
                        Volver
                    </button>
                    <button
                        onClick={() => navigate("/cart")}
                        className={styles.SecondaryButton}
                    >
                        Finalizar
                    </button>
                </div>
            )}
        </div>
    );
};
