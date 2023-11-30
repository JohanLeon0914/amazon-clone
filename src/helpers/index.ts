
export const getProducts = async () => {
    const res = await fetch(process.env.API_PRODUCTS!);
    if (!res.ok) {
        throw new Error("Fail to fetch products")
    }
    return res.json()
};
