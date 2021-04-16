import { axiosClient } from './axiosClient';
const ContactAPI = {
    getAll() {
        const url = `/contact`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/contact/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = `/contact`;
        return axiosClient.post(url, data);
    },
    remove(id) {
        const url = `/contact/${id}`;
        return axiosClient.delete(url);
    },
}
export default ContactAPI;