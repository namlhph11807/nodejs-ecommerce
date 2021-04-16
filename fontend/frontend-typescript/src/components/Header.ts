import CategoryAPI from "../api/categoryAPI";

const Header = {
    async render() {
        const { data } = await CategoryAPI.getAll();
        return /*html*/`
        <nav class="nav d-flex justify-content-between">
        <ul class="flex">
                    <li>
                        <a href="/" class="block no-underline p-3 hover:bg-blue-500 hover:text-black text-white ">Home
                            Page</a>
                    </li>
                    <li>
                        <a href="/#/products"
                            class="block no-underline p-3 hover:bg-blue-500 hover:text-black text-white">Products</a>
                    </li>
                    ${data.map(category => {
            return `
                            <li>
                                <a href="/#/category/${category.id}"
                                    class="block no-underline p-3 hover:bg-blue-500 hover:text-black text-white">${category.name}</a>
                            </li>
                            `
        })
            }       
             <li>
                        <a href="/#/contact"
                            class="block no-underline p-3 hover:bg-blue-500 hover:text-black text-white">Contact</a>
                    </li>
                    <li>
                    <a href="/#/newpage"
                        class="block no-underline p-3 hover:bg-blue-500 hover:text-black text-white">Event</a>
                    </li>
                    <li>
                        <a href="/#/listproduct"
                            class="block no-underline p-3 hover:bg-blue-500 hover:text-black text-white">ADMIN</a>
                    </li>
                  
                </ul>
            </nav>
        `
    }
}
export default Header;