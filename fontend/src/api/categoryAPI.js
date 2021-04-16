import { axiosClient } from './axiosClient';
const CategoryAPI = {
    getAll() {
        const url = `/category`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/category/${id}`;
        return axiosClient.get(url);
    },
    add(product) {
        const url = `/category/${id}`;
        return axiosClient.post(url, product);
    },
    remove(id) {
        const url = `/category/${id}`;
        return axiosClient.delete(url);
    },
}
export default CategoryAPI;