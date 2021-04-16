import express from 'express';
import { create, remove, list, update, read, categoryById } from '../controllers/category';

const router = express.Router();

// router.get('/product', (req, res) => {
//     console.log('Successfully');
// });

// danh sách sản phẩm

router.get('/category', list)

// thêm sản phẩm

router.post('/category', create);

// xóa sản phẩm

router.delete('/category/:categoryID', remove);

// sửa sản phẩm

router.put('/category/:categoryID', update);

// chi tiết sản phẩm

router.param('categoryID', categoryById)
router.get('/category/:categoryID', read)

module.exports = router;
