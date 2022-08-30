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
