import CategoryAPI from '../api/categoryAPI.js';
// import ProductApi from '../api/productAPI.js'
import { $ } from '../utils.js';
// import SitebarMenu from '../components/SitebarMenu.js';
const CategoryAdd = {
     render() {
     
        return/*html*/`
        <div class="text-center">
                    <form action="" id="add-categories">
                    <label for="">Name Categories</label>
                    <input type="text" name="" id="name" style="border:1px solid black ; border-radius:20px">
                    <button class="btn btn-primary">Add</button>
                    </form>
        </div>
     
         `
    },
    afterRender(){
        $('#add-categories').addEventListener('submit', e => {
            e.preventDefault();
            if($("#name").value==""){
                alert("Name khong duoc bo trong")
            }else{
                const categories={
                    name:$("#name").value
                }
                console.log(categories);
                alert("Add Success")
                CategoryAPI.add(categories)
            }
        })
    }
   
}
export default CategoryAdd;