import { useEffect, useState } from "react";
import { getDataProd } from "../../utilities/getProducts";
import { Item } from "./Item";
import styles from "./ItemList.module.css";

export const ItemList = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const nerProducts = await getDataProd();
        setProducts(nerProducts);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <ul className={styles.itemListGrid}>
            {products.map((prod) => (
                <Item key={prod.id} {...prod} />
            ))}
        </ul>
    );
};
