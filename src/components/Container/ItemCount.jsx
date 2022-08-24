import { useState } from "react";
import burguer_1 from "../assets/burguer_1.png";
import styles from "./ItemCount.module.css";

export const ItemCount = ({ initial, stock }) => {
    const [counter, setCounter] = useState(initial);

    const addProduct = () => {
        if (stock > counter) {
            return setCounter(counter + 1);
        }
    };

    const lessProduct = () => {
        if (1 < counter) {
            return setCounter(counter - 1);
        }
    };

    return (
        <div className={styles.CardContainer}>
            <img src={burguer_1} alt="Imagen de hamburguesa" />
            <h3 className={styles.DescriptionCard}>HIJA DE RE MIL POWER</h3>
            <h4 className={styles.StockProduct}>Stock {stock}</h4>
            <div className={styles.Buttons}>
                <button onClick={addProduct}>+</button>
                <p>{counter}</p>
                <button onClick={lessProduct}>-</button>
            </div>
            <button className={styles.AddButton}>Agregar</button>
        </div>
    );
};
