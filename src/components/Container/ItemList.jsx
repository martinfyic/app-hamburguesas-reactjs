import { useEffect, useState } from "react";
import { getDataProd } from "../../utilities/getDataProd";
import { Item } from "./Item";
import styles from "./ItemList.module.css";

export const ItemList = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const newProducts = await getDataProd();
        setTimeout(() => {
            setProducts(newProducts);
        }, 1000);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div
            className={!products.length ? styles.snniper : styles.itemListGrid}
        >
            {!products.length ? (
                <div className={styles.snniperContainer}>
                    <span className={styles.loader}></span>
                </div>
            ) : (
                products.map((prod) => <Item key={prod.id} {...prod} />)
            )}
        </div>
    );
};
