import express from 'express';
import { create, remove, list, update, productById, read,photo } from '../controllers/product';

const router = express.Router();

// router.get('/product', (req, res) => {
//     console.log('Successfully');
// });

// danh sách sản phẩm

router.get('/product', list);

// thêm sản phẩm

router.post('/product', create);

// xóa sản phẩm

router.delete('/product/:productID', remove);

// sửa sản phẩm

router.put('/product/:productID', update);

//photo
router.get('/product/photo/:productID', photo);

// chi tiết sản phẩm

router.param('productID', productById);
router.get('/product/:productID', read);

module.exports = router;
