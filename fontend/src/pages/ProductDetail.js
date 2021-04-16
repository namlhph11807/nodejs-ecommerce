// import data from '../data.js';
import { parseRequestUrl } from '../utils.js';
import ProductApi from '../api/productAPI.js';
import Menuproduct from '../components/Menuproduct.js';

const ProductDetail = {
    async render() {
        const { id } = parseRequestUrl();
        const { data: product } = await ProductApi.get(id);

        return /*html*/`
        <div class="container-fluid">
        <div class="row">
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                ${await Menuproduct.render()};
                        </nav>
    
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div class="row">
                    <div class="col-6">
                        <img src="http://localhost:4000/api/product/photo/${product._id}" />
                    </div>
                    <div class="col-6">
                        <h1>${product.name}</h1>
                        <p>Giá : ${product.price}</p>
                        <p>Mô tả : ${product.description}</p>
                        <p>Tình trạng : ${product.shipping}</p>
                        <p>Còn lại : ${product.quantity}</p>
                        <a href="" class="btn btn-primary">Add To Card</a>
                    </div>
                </div>
            </main>
        </div>
    </div>
        `
    }
}
export default ProductDetail;

