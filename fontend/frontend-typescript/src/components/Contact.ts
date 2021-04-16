import ContactAPI from "../api/contactAPI.js";
import contactAPI from "../api/contactAPI.js";
import { $, reRender } from '../utils.js';

const Contact = {
    async render() {
        const { data: contact } = await contactAPI.getAll();
        return/*html*/`
        <thead>
        <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Description</th>
        </tr>
        </thead>
        <body>
            ${contact.map((customer, index) => {
            return/*html*/`
            <tr>
                <td>${index}</td>
                <td>${customer.name}</td>
                <td>${customer.phone}</td>
                <td>${customer.description}</td>
                <td>
                <button class="btn btn-danger btn-remove" data-id="${customer.id}" >Remove</button>
                </td> 
            </tr>
                `
        }).join("")}
        </body>
        `
    },
    async afterRender() {
        const btns = $('#contact .btn');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function () {
                const question = confirm('Chắc chưa ?')
                if (question) {
                    await ContactAPI.remove(id);
                    await reRender(Contact, '#contact');
                }
            })
        })
    }
}
export default Contact;