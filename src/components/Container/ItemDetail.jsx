import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataProd } from "../../utilities/getDataProd";
import { ItemCount } from "./ItemCount";
import styles from "./ItemDetail.module.css";

export const ItemDetail = () => {
    const [itemDetail, setItemDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        setTimeout(async () => {
            const resp = await getDataProd();
            setItemDetail(resp.filter((elem) => elem.id === parseInt(id)));
        }, 1000);
    }, [id]);

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
                                <ItemCount {...prod} />
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};
