import { ItemCount } from "./ItemCount";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = (props) => {
    return (
        <>
            <h1 className={styles.Title}>{props.greeting}</h1>
            <ItemCount stock={10} initial={1} />
        </>
    );
};

export default ItemListContainer;
