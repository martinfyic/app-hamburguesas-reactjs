import { useState } from "react";
import burguer_1 from "../assets/burguer_1.png";
import styles from "./ItemCount.module.css";

export const ItemCount = ({ initial, stock, onAdd }) => {
    const [counter, setCounter] = useState(initial);

    //Sumar 1 prod, con limite de stock
    const addProduct = () => {
        if (stock > counter) {
            return setCounter(counter + 1);
        }
    };

    //Restar 1 prod, con limite de 1
    const lessProduct = () => {
        if (1 < counter) {
            return setCounter(counter - 1);
        }
    };

    //Agregar producto al carrito
    const shopProduct = () => {
        onAdd(counter);
    };

    return (
        <div className={styles.CardContainer}>
            <img src={burguer_1} alt="Imagen de hamburguesa" />
            <h3 className={styles.DescriptionCard}>HIJA DE RE MIL POWER</h3>
            <h4 className={styles.StockProduct}>Stock {stock - counter}</h4>
            <div className={styles.Buttons}>
                <button onClick={lessProduct}>-</button>
                <p>{counter}</p>
                <button onClick={addProduct}>+</button>
            </div>
            <button className={styles.AddButton} onClick={shopProduct}>
                Agregar
            </button>
        </div>
    );
};
