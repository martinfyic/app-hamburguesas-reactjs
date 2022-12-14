import { useNavigate } from "react-router-dom";
import styles from "./CartTotalInfo.module.css";

export const CartTotalInfo = ({ countProducts, countPrice, clearCart }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.TotalInfoContainer}>
                <div className={styles.TotalInfo}>
                    <p>Total productos: {countProducts}</p>
                    <p>Total a pagar: ${countPrice}</p>
                </div>
                <button onClick={clearCart}>Vaciar</button>
                <button onClick={() => navigate("/formulario")}>Comprar</button>
            </div>
        </>
    );
};
