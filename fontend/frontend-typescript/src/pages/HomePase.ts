import ProductApi from '../api/productAPI.js';

const HomePage = {
    async render() {
        const { data: products } = await ProductApi.getAll();
        return /*html*/`  
            <h1 class="text-center" >Home Page</h1>
            <div class="grid grid-cols-3">
                ${products.map(product => {
            return `
                        <div class="">
                            <div class="">
                                <img src="${product.image}" class="card-img-top" alt="${product.name}" >
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">${product.price}</p>
                                <a href="/#/products/${product.id}" class="btn btn-primary">View Product</a>  
                            </div>
                        </div>    
                        `
        }).join("")}
            </div>
        `
    },
}
export default HomePage;