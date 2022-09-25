import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { ItemDetail } from "./ItemDetail";
import styles from "./ItemDetailContainer.module.css";

export const ItemDetailContainer = (props) => {
    const [dataDetail, setDataDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "productsData", id);
        getDoc(queryDoc).then((resp) =>
            setDataDetail({ id: resp.id, ...resp.data() })
        );
    }, [id]);

    return (
        <>
            <h1 className={styles.TitleDetails}>{props.titleDetail}</h1>
            <ItemDetail dataDetail={dataDetail} />
        </>
    );
};
