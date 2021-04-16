import CategoryAPI from "../api/categoryAPI.js";
// import ProductApi from "../api/productAPI.js";
import { $, reRender } from '../utils.js';

const ListProduct = {
    async render() {
        const { data: categories } = await CategoryAPI.getAll();
        console.log(categories);
        return/*html*/`
       <table>
       <thead>
       <tr>
           <th>STT</th>
           <th>Name</th>
           <th>Action</th>
       </tr>
       </thead>
       <tbody>
          ${categories.map((e,index)=>{
              return /*html */ `
              <tr>
              <td>${index+1}<td>
              <td>${e.name}<td>
              <td>
              <a href ="/#/editproduct/${e._id}" class="btn btn-primary">Update</a>
                <button class="btn btn-danger btn-remove" data-id="${e._id}" >Remove</button>
              <td>
              
              </tr>
              `
          }).join("")}
        
       </tbody>
       
       </table>
        `
    },
    
    async afterRender() {
        const btns = $('#list-es .btn');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function () {
                const question = confirm('Chắc chưa ?')
                if (question) {
                    await CategoryAPI.remove(id);
                    await reRender(ListProduct, '#list-products');
                }
            })
        })
    }
}
export default ListProduct;