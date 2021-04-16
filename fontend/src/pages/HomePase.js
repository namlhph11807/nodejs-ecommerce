import ProductApi from '../api/productAPI.js';
import { $ } from '../utils.js';
import firebase from '../firebase.js'

const HomePage = {
    async render() {
        const { data: products } = await ProductApi.getAll();
        console.log("hbjjhhjkfsr",products);
        return /*html*/`  
            <h1 class="text-center" >Home Page</h1>
            <div class="grid grid-cols-3">
                ${products.data.map(product => {
            return `
                        <div class="">
                            <div class="">
                                <img src="http://localhost:4000/api/product/photo/${product._id}" class="card-img-top" alt="${product.name}" >
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">${product.price}</p>
                                <a href="/#/products/${product._id}" class="btn btn-primary">View Product</a>  
                            </div>
                        </div>    
                        `
        }).join("")}
            </div>
        `
    },
}
export default HomePage;