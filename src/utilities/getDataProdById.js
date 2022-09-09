export const getDataProdById = async (props) => {
    const url = "productsData.json";
    try {
        const resp = await fetch(url);
        const productsInfo = await resp.json();
        return productsInfo[props.id];
    } catch (error) {
        console.warn(error);
    }
};
