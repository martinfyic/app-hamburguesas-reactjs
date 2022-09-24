import { useNavigate } from "react-router-dom";
import styles from "./CartEmpty.module.css";

export const CartEmpty = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.emptyContainer}>
            <p className={styles.emptyinfo}>
                No tienes productos en el carrito
            </p>
            <button
                onClick={() => navigate("/")}
                className={styles.emptyButton}
            >
                Volver
            </button>
        </div>
    );
};
