import { ItemCount } from "./ItemCount";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <h1 className={styles.Title}>{greeting}</h1>
            <ItemCount stock={10} value={1} />
        </>
    );
};

export default ItemListContainer;
