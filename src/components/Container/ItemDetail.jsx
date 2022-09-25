import { useState } from "react";
import { Loader } from "../../utilities/Loader";
import { ItemCount } from "./ItemCount";
import styles from "./ItemDetail.module.css";

export const ItemDetail = ({ dataDetail }) => {
    const [counter, setCounter] = useState(1);
    //Sumar 1 prod, con limite de stock
    const addProduct = () => {
        let stockItem = dataDetail.stock;
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
        <>
            {dataDetail.id ? (
                <div className={styles.itemListGrid}>
                    <div className={styles.detailContainer}>
                        <img
                            className={styles.imgProd}
                            src={dataDetail.pictureUrl}
                            alt={dataDetail.title}
                        />
                        <div className={styles.infoContainer}>
                            <p className={styles.tituloDetails}>
                                {dataDetail.title}
                            </p>
                            <p className={styles.description}>
                                <strong className={styles.strong}>
                                    Descripcion:
                                </strong>{" "}
                                {dataDetail.description}
                            </p>
                            <p className={styles.price}>
                                <strong className={styles.strong}>
                                    Precio:
                                </strong>{" "}
                                ${dataDetail.price}
                            </p>
                            <h4 className={styles.StockProduct}>
                                {dataDetail.stock - counter === 0
                                    ? "Sin stock"
                                    : `Stock ${dataDetail.stock - counter}`}
                            </h4>
                            <ItemCount
                                addProduct={addProduct}
                                lessProduct={lessProduct}
                                counter={counter}
                                prod={dataDetail}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.spinner}>
                    <Loader />
                </div>
            )}
        </>
    );
};
