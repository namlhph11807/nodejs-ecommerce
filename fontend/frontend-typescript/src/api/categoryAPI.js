import { axiosClient } from './axiosClient';
const CategoryAPI = {
    getAll() {
        const url = `/categories`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    },
    add(product) {
        const url = `/categories/${id}`;
        return axiosClient.post(url, product);
    },
    remove(id) {
        const url = `/categories/${id}`;
        return axiosClient.delete(url);
    },
}
export default CategoryAPI;