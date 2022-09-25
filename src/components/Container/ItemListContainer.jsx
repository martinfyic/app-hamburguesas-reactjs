import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
} from "firebase/firestore";
import styles from "./ItemListContainer.module.css";
import { useEffect, useState } from "react";

export const ItemListContainer = (props) => {
    const { categid } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "productsData");
        if (categid) {
            const queryFilter = query(
                queryCollection,
                where("categoryName", "==", categid)
            );
            getDocs(queryFilter).then((resp) =>
                setProducts(
                    resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
                )
            );
        } else {
            getDocs(queryCollection).then((resp) =>
                setProducts(
                    resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
                )
            );
        }
    }, [categid]);

    return (
        <>
            <h1 className={styles.Title}>{props.greeting}</h1>
            {categid && (
                <h2 className={styles.subTitle}>{categid.toUpperCase()}</h2>
            )}
            <ItemList products={products} />
        </>
    );
};
