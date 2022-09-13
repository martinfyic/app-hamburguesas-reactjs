import { Link } from "react-router-dom";
import styles from "./ItemCount.module.css";

export const ItemCount = ({ addProduct, lessProduct, counter }) => {
    return (
        <div className={styles.CardContainer}>
            <div className={styles.Buttons}>
                <button
                    onClick={() => {
                        lessProduct();
                    }}
                >
                    -
                </button>
                <p>{counter}</p>
                <button
                    onClick={() => {
                        addProduct();
                    }}
                >
                    +
                </button>
            </div>
            <Link to={"/cart"}>
                <button className={styles.AddButton}>Agregar</button>
            </Link>
        </div>
    );
};
