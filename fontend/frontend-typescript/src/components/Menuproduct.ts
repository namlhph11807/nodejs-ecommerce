import CategoryAPI from '../api/categoryAPI.js';

const Menuproduct = {
    async render() {
        const { data: categories } = await CategoryAPI.getAll();
        return/*html*/`
        <div class="position-sticky pt-3">
                            <ul class="nav flex-column">
                            <li class="nav-item">
                            <a class="nav-link" href="/#/products">
                                <span data-feather="file"></span>
                                Products
                            </a>
                            
                        </li> 
                                ${categories.map(item => {
            return `
                                    <li class="nav-item">
                                              <a class="nav-link active" aria-current="page" href="/#/category/${item.id}">
                                                <span data-feather="home"></span>
                                                    ${item.name}
                                                 </a>
                                            </li>
                                            `
        }).join("")}
                            </ul > 
                        </div >
    `
    }
}
export default Menuproduct