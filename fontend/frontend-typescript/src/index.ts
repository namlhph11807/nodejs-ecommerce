import HomePase from './pages/HomePase';
import ProductsPage from './pages/ProductsPage';
import ProductDetail from './pages/ProductDetail';
import { parseRequestUrl, $ } from './utils';
import Error404Page from './pages/Error404Page';
import Header from './components/Header';
import CategoryPage from './pages/CategoryPage.';
import ProductAddPage from './pages/ProductAddPage';
import AdminProductPage from './pages/AdminProductPage.';
import ProductEditPage from './pages/ProductEditPage';
import ContactPage from './pages/ContactPage.';
import AdminContactPage from './pages/AdminContactPage';
import NewPage from './pages/NewPage';
import newpageg from './new/Newpageg';
import newPageb from './new/Newpageb';
import newpagea from './new/Newpagea';
import newPagec from './new/Newpagec';
import newpaged from './new/Newpaged';
import newPageee from './new/Newpageee';


const routes = {
    '/': HomePase,
    '/products': ProductsPage,
    '/products/:id': ProductDetail,
    '/category/:id': CategoryPage,
    '/addproduct': ProductAddPage,
    '/listproduct': AdminProductPage,
    '/editproduct/:id': ProductEditPage,
    '/contact': ContactPage,
    '/contactccc': AdminContactPage,
    '/newpage': NewPage,
    '/newpageg': newpageg,
    '/newpageb': newPageb,
    '/newpagea': newpagea,
    '/newpagec': newPagec,
    '/newpaged': newpaged,
    '/newpageee': newPageee,
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
    await page.afterRender();
}
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);