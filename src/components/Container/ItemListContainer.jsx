import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import styles from "./ItemListContainer.module.css";

export const ItemListContainer = (props) => {
    const { categid } = useParams();

    return (
        <>
            <h1 className={styles.Title}>{props.greeting}</h1>
            {categid && (
                <h2 className={styles.subTitle}>{categid.toUpperCase()}</h2>
            )}
            <ItemList categoryId={categid} />
        </>
    );
};
