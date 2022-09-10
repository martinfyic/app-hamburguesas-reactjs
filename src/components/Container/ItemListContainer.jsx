import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = (props) => {
    const { categid } = useParams();

    return (
        <>
            <h1 className={styles.Title}>{props.greeting}</h1>
            <ItemList categoryId={categid} />
        </>
    );
};

export default ItemListContainer;
