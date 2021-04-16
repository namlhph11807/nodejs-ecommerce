import ProductApi from '../api/productAPI.js';
import { $ } from '../utils';
import firebase from '../firebase.js';
import ProductPage from './ProductsPage.js';
import Categories from './../api/categoryAPI.js';
const ProductAddPage = {
    async render() {
        const { data: categories } = await Categories.getAll();
        return/*html*/`
            <form class="text-center" id="form-add">
                <div>
                <p>Name Product</p>
                <input class="border-4 border-light-black-500 border-opacity-100 color:black " type="text" placeholder="Tên sản phẩm" id="product-name"/><br>
                <p class = "errorName text-red-600"></p>
                </div>
                <div>
                <p>Images</p>
                <input type="file" id="product-image"><br>
                <p class = "errorImage text-red-600"></p>
                </div>
                <div>
                <p>Price</p>
                <input class="border-4 border-light-black-500 border-opacity-100 color:black " type="text" placeholder="Giá sản phẩm" id="product-price"/><br>
                <p class = "errorPrice text-red-600"></p>
                </div>
                <p>Mô tả</p>
                <textarea class="border-4 border-light-black-500 border-opacity-100 color:black " type="text" placeholder="Mô tả" id="product-description"></textarea><br>
                <p class = "errorDescription text-red-600"></p>
                <label>Status:</label>
                <select name="" id="product-status">
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select><br>
                <div>
                <p>CountInStock</p>
                <input class="border-4 border-light-black-500 border-opacity-100 color:black " type="text" placeholder="Số lượng còn" id="product-countInStock"/><br>
                </div>
                <p class = "errorCountInStock text-red-600"></p>
                <label>Product Category</label>
                <select name="" id="product-categoryID">
                    ${categories.map(item => {
            return /*html*/`
                        <option value = "${item.id}">${item.name}</option>
                        `

        })}
                </select><br>
                <input  class="bg-blue-400 hover:bg-blue-600 hover:text-black text-white rounded-full text-white py-1 px-3 " type="submit"/>
            </form>
        `
    },
    afterRender() {
        $('#form-add').addEventListener('submit', e => {
            e.preventDefault();
            const name = $('#product-name');
            const price = $('#product-price');
            const image = $('#product-image');
            const description = $('#product-description');
            const countInStock = $('#product-countInStock');
            if (name.value == "") {
                $('.errorName').innerHTML = 'Không được để trống !'
            } else {
                $('.errorName').innerHTML = ''
            }
            if (countInStock.value == '') {
                $('.errorCountInStock').innerHTML = 'Không được để trống !'
            }
            else {
                if (isNaN(countInStock.value)) {
                    $('.errorCountInStock').innerHTML = 'Phải nhập số !'
                } else {
                    if (countInStock.value < 0) {
                        $('.errorCountInStock').innerHTML = 'Không được để số âm'
                    } else {
                        $('.errorCountInStock').innerHTML = ''
                    }
                }
            }
            if (description.value == "") {
                $('.errorDescription').innerHTML = 'Không được để trống !'
            } else {
                $('.errorDescription').innerHTML = ''
            }
            if (image.value == "") {
                $('.errorImage').innerHTML = 'Không được để trống !'
            } else {
                $('.errorImage').innerHTML = ''
            }
            if (price.value == '') {
                $('.errorPrice').innerHTML = 'Không được để trống !'
            }
            else {
                if (isNaN(price.value)) {
                    $('.errorPrice').innerHTML = 'Phải nhập số !'
                } else {
                    if (price.value < 0) {
                        $('.errorPrice').innerHTML = 'Không được để số âm'
                    } else {
                        $('.errorPrice').innerHTML = ''
                    }
                }
            }
            if (name.value !== '' && price.value !== '' && price.value > 0 && isNaN(price.value) == false && image.value !== '' && description.value !== '' && countInStock.value !== '' && countInStock.value > 0 && isNaN(countInStock.value) == false) {
                const productImage = $('#product-image').files[0];
                let storageRef = firebase.storage().ref(`image/${productImage.name}`);
                storageRef.put(productImage).then(function () {
                    console.log('upload thành công')
                    storageRef.getDownloadURL().then((url) => {
                        const product = {
                            id: Math.random().toString(36).substr(2, 6),
                            name: $('#product-name').value,
                            price: $('#product-price').value,
                            description: $('#product-description').value,
                            countInStock: $('#product-countInStock').value,
                            status: $('#product-status').value,
                            categoryID: $('#product-categoryID').value,
                            image: url
                        }
                        ProductApi.add(product);
                    })
                })
            }
        })
    }
}
export default ProductAddPage;