import { useState } from "react";
import styles from "./ItemCount.module.css";

export const ItemCount = (prod) => {
    const [counter, setCounter] = useState(1);

    //Sumar 1 prod, con limite de stock
    const addProduct = () => {
        if (prod.stock > counter) {
            return setCounter(counter + 1);
        }
    };

    //Restar 1 prod, con limite de 1
    const lessProduct = () => {
        if (1 < counter) {
            return setCounter(counter - 1);
        }
    };

    return (
        <div className={styles.CardContainer}>
            <h4 className={styles.StockProduct}>
                Stock {prod.stock - counter}
            </h4>
            <div className={styles.Buttons}>
                <button onClick={lessProduct}>-</button>
                <p>{counter}</p>
                <button onClick={addProduct}>+</button>
            </div>
            <button className={styles.AddButton}>Agregar</button>
        </div>
    );
};
