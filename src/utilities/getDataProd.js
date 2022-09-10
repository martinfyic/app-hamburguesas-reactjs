export const getDataProd = async () => {
    const url = "../../productsData.json";
    try {
        const resp = await fetch(url);
        const productsInfo = await resp.json();
        return productsInfo;
    } catch (error) {
        console.warn(error);
    }
};
