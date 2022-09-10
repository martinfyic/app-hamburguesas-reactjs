import { useEffect, useState } from "react";
import { getDataProd } from "../../utilities/getDataProd";
import { Item } from "./Item";
import styles from "./ItemList.module.css";

export const ItemList = ({ categoryId }) => {
    const [products, setProducts] = useState([]);

    const getProducts = async (categoryId) => {
        const newProducts = await getDataProd();
        if (categoryId === "hamburguesas") {
            const burgers = newProducts.map(
                (elem) => elem.categoryName === "HAMBURGUESAS"
            );
            return setProducts(burgers);
        }
        if (categoryId === "cervezas") {
            const beers = newProducts.filter((elem) => elem.category === 2);
            return setProducts(beers);
        }
        if (categoryId === undefined) {
            return setProducts(newProducts);
        }
    };

    useEffect(() => {
        getProducts(categoryId);
    }, [categoryId]);

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
