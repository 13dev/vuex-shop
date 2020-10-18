import products from "./products";

export default {
    getProducts() {
        return new Promise((resolve, reject) => {
            setTimeout(_ => {
                console.log(products);
                resolve(products);
            }, 500);
        });
    },
    products(action, productId) {
        return new Promise((resolve, reject) => {
            setTimeout(_ => {
                resolve(productId);
            }, 100);
        });
    }
}