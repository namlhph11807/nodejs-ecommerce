import HomePase from './pages/HomePase.js';
import ProductsPage from './pages/ProductsPage.js';
import ProductDetail from './pages/ProductDetail.js';
import { parseRequestUrl, $ } from './utils.js';
import Error404Page from './pages/Error404Page.js';
import Header from './components/Header.js';
import CategoryPage from './pages/CategoryPage.js';
import ProductAddPage from './pages/ProductAddPage.js';
import AdminProductPage from './pages/AdminProductPage.js';
import ProductEditPage from './pages/ProductEditPage.js';
import ContactPage from './pages/ContactPage.js';
import AdminContactPage from './pages/AdminContactPage.js';
import NewPage from './pages/NewPage.js';
import newpageg from './new/Newpageg.js';
import newPageb from './new/Newpageb.js';
import newpagea from './new/Newpagea.js';
import newPagec from './new/Newpagec.js';
import newpaged from './new/Newpaged.js';
import newPageee from './new/Newpageee.js';
import CategoryAdd from './pages/CategoryAdd.js';
import listcategories from './components/Listcategories.js';
import CategoryEdit from './pages/CategoryEdit.js';

const routes = {
    '/': HomePase,
    '/products': ProductsPage,
    '/products/:id': ProductDetail,
    '/category/:id': CategoryPage,
    '/addproduct': ProductAddPage,
    '/listproduct': AdminProductPage,
    '/editproduct/:id': ProductEditPage,
    '/categoryadd': CategoryAdd,
    '/contact': ContactPage,
    '/contactccc': AdminContactPage,
    '/newpage': NewPage,
    '/newpageg': newpageg,
    '/newpageb': newPageb,
    '/newpagea': newpagea,
    '/newpagec': newPagec,
    '/newpaged': newpaged,
    '/newpageee': newPageee,
    "/listcategories":listcategories,
    "/categoryedit": CategoryEdit,
}

const router = async () => {
    // check error
    const { resource, id } = parseRequestUrl();
    const parseUrl = (resource ? `/${resource}` : '/') +
        (id ? `/:id` : '')
    console.log(parseUrl);
    const page = routes[parseUrl] ? routes[parseUrl] : Error404Page;
    console.log(page);
    $('#header').innerHTML = await Header.render();
    $('NewPage').innerHTML = await NewPage.render();
    $('#main-content').innerHTML = await page.render();
    if(page.afterRender){
        await page.afterRender();
    }
}
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);