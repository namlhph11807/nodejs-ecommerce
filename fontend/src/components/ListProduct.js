import ProductApi from "../api/productAPI.js";
import { $, reRender } from '../utils.js';

const ListProduct = {
    async render() {
        const { data: products } = await ProductApi.getAll();
        console.log(products);
        return/*html*/`
        <thead>
        <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
        </tr>
        </thead>
        <body>
            ${products.data.map((product, index) => {
            return/*html*/`
            <tr>
                <td>${index+1}</td>
                <td>${product.name}</td>
                <td><img src ="${product.image}" width = "100"></td>
                <td>${product.price}</td>
                <td>${product.description}</td>
                <td>
                <a href ="/#/editproduct/${product._id}" class="btn btn-primary">Update</a>
                <button class="btn btn-danger btn-remove" data-id="${product._id}" >Remove</button>
                </td> 
            </tr>
                `
        }).join("")}
        </body>
        `
    },
    async afterRender() {
        const btns = $('#list-products .btn');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function () {
                const question = confirm('Chắc chưa ?')
                if (question) {
                    await ProductApi.remove(id);
                    await reRender(ListProduct, '#list-products');
                }
            })
        })
    }
}
export default ListProduct;