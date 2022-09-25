import { Loader } from "../../utilities/Loader";
import { Item } from "./Item";
import styles from "./ItemList.module.css";

export const ItemList = ({ products }) => {
    return (
        <>
            {!products.length ? (
                <div className={styles.spinner}>
                    <Loader />
                </div>
            ) : (
                <ul className={styles.itemListGrid}>
                    {products.map((prod) => (
                        <Item key={prod.id} {...prod} />
                    ))}
                </ul>
            )}
        </>
    );
};
