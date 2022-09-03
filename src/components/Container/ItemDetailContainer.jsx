import { ItemDetail } from "./ItemDetail";
import styles from "./ItemDetailContainer.module.css";

export const ItemDetailContainer = (props) => {
    return (
        <>
            <h1 className={styles.TitleDetails}>{props.titleDetail}</h1>
            <ItemDetail />
        </>
    );
};
