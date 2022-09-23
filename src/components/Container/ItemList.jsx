import { useEffect, useState } from "react";
import { getDataProd } from "../../utilities/getDataProd";
import { Item } from "./Item";
import styles from "./ItemList.module.css";

export const ItemList = ({ categoryId }) => {
    const [products, setProducts] = useState([]);

    const getProducts = async (categoryId) => {
        const newProducts = await getDataProd();
        if (categoryId) {
            setProducts(
                newProducts.filter((elem) => elem.categoryName === categoryId)
            );
        } else {
            setProducts(newProducts);
        }
    };

    useEffect(() => {
        getProducts(categoryId);
    }, [categoryId]);

    return (
        <ul className={!products.length ? styles.snniper : styles.itemListGrid}>
            {!products.length ? (
                <div className={styles.snniperContainer}>
                    <span className={styles.loader}></span>
                </div>
            ) : (
                products.map((prod) => <Item key={prod.id} {...prod} />)
            )}
        </ul>
    );
};
