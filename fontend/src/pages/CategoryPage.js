
import ProductApi from '../api/productAPI.js';
import { parseRequestUrl } from '../utils.js';
const CategoryPage = {
    async render() {
        const { id } = parseRequestUrl();
        const { data: products } = await ProductApi.getAll();
        const result = products.filter(product => product.category == id).map(product => {
            return/*html*/`     
                <div class="col-md-6 text-center">
                    <img src="${product.image}" class="" alt="${product.name}" width="200px">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                        <a href="/#/products/${product._id}" class="btn btn-primary">Go somewhere</a>  
                </div>
            `
        }).join("");
        return /*html*/`
        <h1 class="text-center" >Category</h1>
        <div class="row" >
            ${result};
        </div>
        `
    }
}
export default CategoryPage;