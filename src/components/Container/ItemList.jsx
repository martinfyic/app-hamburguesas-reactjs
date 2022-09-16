import { useEffect, useState } from "react";
import { getDataProd } from "../../utilities/getDataProd";
import { Item } from "./Item";
import styles from "./ItemList.module.css";

export const ItemList = ({ categoryId }) => {
    const [products, setProducts] = useState([]);

    //filtrado de productos x categoria tomando referencia useParams 1-hamburguesas 2-cervezas 3-todos(undefineda)
    const getProducts = async (categoryId) => {
        const newProducts = await getDataProd();
        if (categoryId === "hamburguesas") {
            const burgers = newProducts.filter(
                (elem) => elem.categoryName === categoryId.toUpperCase()
            );
            return setProducts(burgers);
        }
        if (categoryId === "fritas") {
            const fried = newProducts.filter(
                (elem) => elem.categoryName === categoryId.toUpperCase()
            );
            return setProducts(fried);
        }
        if (categoryId === "cervezas") {
            const beers = newProducts.filter(
                (elem) => elem.categoryName === categoryId.toUpperCase()
            );
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
