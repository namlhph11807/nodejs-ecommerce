import ProductApi from "../api/productAPI.js";
import { $, reRender } from '../utils';

const ListProduct = {
    async render() {
        const { data: products } = await ProductApi.getAll();
        return/*html*/`
        <thead>
        <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
            <th>status</th>
            <th>CountInStock</th>
            <th>Action</th>
        </tr>
        </thead>
        <body>
            ${products.map((product, index) => {
            return/*html*/`
            <tr>
                <td>${index}</td>
                <td>${product.name}</td>
                <td><img src ="${product.image}" width = "100"></td>
                <td>${product.price}</td>
                <td>${product.description}</td>
                <td>${product.status}</td>
                <td>${product.countInStock}</td>
                <td>
                <a href ="/#/editproduct/${product.id}" class="btn btn-primary">Update</a>
                <button class="btn btn-danger btn-remove" data-id="${product.id}" >Remove</button>
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