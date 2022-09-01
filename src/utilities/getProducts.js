// export const getDataProd = async () => {
//     const url = "productsData.json";
//     try {
//         const resp = await fetch(url);
//         const productsInfo = await resp.json();
//         return productsInfo;
//     } catch (error) {
//         console.warn("El pedido a la API fallo");
//     }
// };

// lo hago de esta forma para el desafio unicamente
export const getDataProd = () => {
    const url = "productsData.json";
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                fetch(url)
                    .then((resp) => resp.json())
                    .then((data) => {
                        const request = data;
                        return request;
                    })
            );
        }, 2000);
    });
};
