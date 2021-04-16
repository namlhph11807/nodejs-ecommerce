import ProductApi from "../api/productAPI";
import { parseRequestUrl, $ } from '../utils';
import Categories from './../api/categoryAPI.js';

const ProductEditPage = {
  async render() {
    const { id } = parseRequestUrl();
    const { data: product } = await ProductApi.get(id);
    const { data: categories } = await Categories.getAll();
    return /* html */ `
        <form id="from-update-product">
        <div class="mb-3">
          <label for="product-name" class="form-label">Product Name</label>
          <input type="text" class="form-control" id="product-name" value="${product.name}" aria-describedby="emailHelp">
          <p class="errorName text-red-600"></p>
        </div> 
        <div class="mb-3">
          <label for="product-price" class="form-label">Price</label>
          <input type="text" class="form-control" id="product-price" value="${product.price}" aria-describedby="emailHelp">
          <p class="errorPrice text-red-600"></p>
        </div>
        <div class="mb-3">
          <label for="product-image" class="form-label">Image</label>
          <input type="file" id="product-image"><br>
          <p class="errorImage text-red-600"></p>
        </div>
        <div>
        <textarea class="border-4 border-light-black-500 border-opacity-100 color:black " value="${product.description}" type="text" placeholder="Mô tả" id="product-description"></textarea><br>
        <p class="errorDescription text-red-600"></p>
        </div>        
        <label>Trạng thái:</label>
                <select name="" id="product-status">
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select><br>
        <div class="mb-3">
          <label for="product-countInStock" class="form-label">CountInStock</label>
          <input type="text" class="form-control" id="product-countInStock" value="${product.countInStock}" aria-describedby="emailHelp">
          <p class="errorCountInStock text-red-600"></p>
        </div>
        <label>categoryID:</label>
                <select name="" id="product-categoryID">
                  ${categories.map(item => {
      if (product.categoryID == item.id)
        return /*html*/`
      <option selected value = "${item.id}">${item.name}</option>
      `;
      return /*html*/`
      <option value = "${item.id}">${item.name}</option>
      `;
    })}
                </select><br>        
        <button type="submit" class="btn btn-primary">Update</button>
      </form>
      `
  },
  async afterRender() {
    const { id } = parseRequestUrl();
    const { data: product } = await ProductApi.get(id);

    $('#from-update-product').addEventListener('submit', async (e) => {
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
      // if (description.value == "") {
      //   $('.errorDescription').innerHTML = 'Không được để trống !'
      // } else {
      //   $('.errorDescription').innerHTML = ''
      // }
      // if (image.value == "") {
      //   $('.errorImage').innerHTML = 'Không được để trống !'
      // } else {
      //   $('.errorImage').innerHTML = ''
      // }
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
        const productUpdate = {
          ...product, // lấy hết sp
          name: $('#product-name').value,
          price: $('#product-price').value,
          status: $('#product-status').value,
          description: $('#product-description').value,
          countInStock: $('#product-countInStock').value,
          categoryID: $('#product-categoryID').value,
        };
        console.log(productUpdate);
        await ProductApi.update(id, productUpdate);
        window.localStorage.hash = '/listproduct'
      }
    })
  }
};
export default ProductEditPage;
