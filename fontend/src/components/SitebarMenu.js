
const SitebarMenu = {
    render() {
        return/*html*/`
        <div class="position-sticky pt-3">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/#/listproduct">
                                        <span data-feather="home"></span>
                                        Dashboard
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#/products">
                                        <span data-feather="file"></span>
                                        Products
                                    </a>
                                </li>   
                                <li class="nav-item">
                                <a class="nav-link" href="/#/addproduct">
                                    <span data-feather="file"></span>
                                    Add Product
                                </a>
                                
                            </li> 
                            <li class="nav-item">
                                <a class="nav-link" href="/#/CategoryAdd">
                                    <span data-feather="file"></span>
                                    Add Category
                                </a>
                                
                            </li> 
                            <li class="nav-item">
                                <a class="nav-link" href="/#/contactccc">
                                    <span data-feather="file"></span>
                                    Contact
                                </a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/#/listcategories">
                                    <span data-feather="file"></span>
                                    Categories
                                </a>
                                </li>
                            </ul> 
                        </div>
        `
    }
}
export default SitebarMenu;