import ProductApi from '../api/productAPI';
const ProductsPage = {
    async render() {
        try {
            const { data: products } = await ProductApi.getAll();
            console.log(products);
            const result = products.data.map(product => {
                // console.log(product)
                return `      
                <div>
                    <img src="http://localhost:4000/api/product/photo/${product._id}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price}</p>
                    <a href="/#/products/${product._id}" class="btn btn-primary">View Product</a>  
                    </div>
                </div>    
                `
            }).join("")
            return `
                <h1 class="text-center" >Products Page</h1>
                <div class="grid grid-cols-3 gap-5">
                    ${result}
                </div>
            `
        } catch (error) {
            console.log(error);
        }
        // const { products } = data;
    }
}
export default ProductsPage;