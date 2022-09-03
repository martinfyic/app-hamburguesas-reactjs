import { useState, useEffect } from "react";
import { getDataProd } from "../../utilities/getDataProd";
import styles from "./ItemDetail.module.css";

export const ItemDetail = () => {
    const [itemDetail, setItemDetail] = useState([]);

    const getItem = async () => {
        const detail = await getDataProd();
        const detailItem = detail.filter((elem) => elem.id === 1);
        setTimeout(() => {
            setItemDetail(detailItem);
        }, 2000);
    };

    useEffect(() => {
        getItem();
    }, []);

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
                            <img src={prod.pictureUrl} alt={prod.title} />
                            <div>
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
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};
