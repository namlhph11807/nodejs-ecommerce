import { parseRequestUrl, $ } from '../utils.js';
import CategoryAPI from './../api/categoryAPI.js';

const CategoryEdit = {
  async render() {
    const { data: categories } = await CategoryAPI.getAll();
    return /* html */ `
        <form id="from-update-category">
        <div class="mb-3">
          <label for="category-name" class="form-label">Category Name</label>
          <input type="text" class="form-control" id="category-name" value="${categories.name}" aria-describedby="">
          <p class="errorName text-red-600"></p>
        </div> 
        <form>       
        <button type="submit" class="btn btn-primary">Update</button>
      </form>
      `
  },
  async afterRender() {
    const { id } = parseRequestUrl();
    const { data: category } = await CategoryAPI.get(id);
    
    $('#from-update-category').addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = $('#category-name');
      if (name.value == "") {
        $('.errorName').innerHTML = 'Không được để trống !'
      } else {
        $('.errorName').innerHTML = ''
      }
      
      if (name.value !== '' ) {
        const categoryedit = {
          ...category, // lấy hết sp
          name: $('#category-name').value,
        };
        console.log(categoryedit);
        alert("Update Success")
        await CategoryAPI.update(id, categoryedit);
        window.localStorage.hash = '/listproduct'
      }
    })
  }
};
export default CategoryEdit;
