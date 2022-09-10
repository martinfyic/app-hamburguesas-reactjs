import { getDataProd } from "./getDataProd";

export const getDataProdByCategory = async (id, setItemDetail) => {
    const resp = await getDataProd();
    if (resp.categoryName === id) {
        setItemDetail(resp.fiter((elem) => elem.categoryName === id));
    }
    if (resp.categoryName === undefined) {
        setItemDetail(resp);
    }
    return resp;
};
