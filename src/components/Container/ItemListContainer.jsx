import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = (props) => {
    const { categid } = useParams();

    return (
        <>
            <h1 className={styles.Title}>{props.greeting}</h1>
            {categid && <h2 className={styles.subTitle}>{categid}</h2>}
            <ItemList categoryId={categid} />
        </>
    );
};

export default ItemListContainer;
