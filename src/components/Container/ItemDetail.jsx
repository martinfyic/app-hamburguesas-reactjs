import { useState } from "react";
import { ItemCount } from "./ItemCount";
import styles from "./ItemDetail.module.css";

export const ItemDetail = ({ itemDetail }) => {
    const [counter, setCounter] = useState(1);

    //Sumar 1 prod, con limite de stock
    const addProduct = () => {
        let stockItem = itemDetail[0].stock;
        if (stockItem > counter) {
            setCounter(counter + 1);
        }
    };

    //Restar 1 prod, con limite de 1
    const lessProduct = () => {
        if (1 < counter) {
            setCounter(counter - 1);
        }
    };

    return (
        <div
            className={
                !itemDetail.length ? styles.snniper : styles.itemListGrid
            }
        >
            {!itemDetail.length ? (
                <div className={styles.snniperContainer}>
                    <span className={styles.loader}></span>
                </div>
            ) : (
                itemDetail.map((prod) => {
                    return (
                        <div key={prod.id} className={styles.detailContainer}>
                            <img
                                className={styles.imgProd}
                                src={prod.pictureUrl}
                                alt={prod.title}
                            />
                            <div className={styles.infoContainer}>
                                <p className={styles.tituloDetails}>
                                    {prod.title}
                                </p>
                                <p className={styles.description}>
                                    <strong className={styles.strong}>
                                        Descripcion:
                                    </strong>{" "}
                                    {prod.description}
                                </p>
                                <p className={styles.price}>
                                    <strong className={styles.strong}>
                                        Precio:
                                    </strong>{" "}
                                    ${prod.price}
                                </p>
                                <h4 className={styles.StockProduct}>
                                    {prod.stock - counter === 0
                                        ? "Sin stock"
                                        : `Stock ${prod.stock - counter}`}
                                </h4>
                                <ItemCount
                                    addProduct={addProduct}
                                    lessProduct={lessProduct}
                                    counter={counter}
                                    prod={prod}
                                />
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};
