import ContactAPI from '../api/contactAPI.js';
import { $ } from '../utils';

const ContactPage = {
    render() {
        return /*html*/`
            <form class = "text-center" id="contact">
                <div class="form-group">
                    <input type="text" placeholder="Tên người dùng " id="contact-name" class="form-control">
                    <p class = "errorName text-red-600"></p>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Số Điện Thoại " id="contact-phone" class="form-control">
                    <p class = "errorPhone text-red-600"></p>
                </div>
                <div class="form-group">
                <textarea class="border-4 border-light-black-500 border-opacity-100 color:black " type="text" placeholder="Đánh giá và góp ý" id="contact-description"></textarea><br>
                <p class = "errorDescription text-red-600"></p>
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" value = "Gửi">
                </div>
            </form>
        `
    },
    afterRender() {
        $('#contact').addEventListener('submit', e => {
            e.preventDefault();
            const name = $('#contact-name');
            const phone = $('#contact-phone');
            const description = $('#contact-description')
            if (name.value == "") {
                $('.errorName').innerHTML = 'Không được để trống !'
            } else {
                $('.errorName').innerHTML = ''
            }
            if (phone.value == '') {
                $('.errorPhone').innerHTML = 'Không được để trống !'
            }
            else {
                if (isNaN(phone.value)) {
                    $('.errorPhone').innerHTML = 'Phải nhập số !'
                } else {
                    $('.errorPhone').innerHTML = ''
                }
            }
            if (description.value == "") {
                $('.errorDescription').innerHTML = 'Không được để trống !'
            } else {
                $('.errorDescription').innerHTML = ''
            }

            if (name.value !== '' && phone.value !== '' && isNaN(phone.value) == false && description.value !== '') {
                const customer = {
                    name: $('#contact-name').value,
                    phone: $('#contact-phone').value,
                    description: $('#contact-description').value
                }
                ContactAPI.add(customer);
            }
        })
    }
}

export default ContactPage;