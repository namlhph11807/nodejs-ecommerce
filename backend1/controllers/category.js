import Category from '../models/category';
import _ from 'lodash'

// add product

export const create = (req, res) => {
    const category = new Category(req.body);
    category.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Không tìm thấy danh mục bro :( !!!"
            })
        }
        res.json(data)
    })
}

//  list category ID

export const categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if (err || !category) {
         return   res.status(400).json({
                error: "Không tìm thấy sản phẩm !!!"
            })
        }
        req.category = category;
        next();
    })
}

export const read = (req, res) => {
    return res.json(req.category)
}

// list category all

export const list = (req, res) => {
    Category.find((err, category) => {
        if (err) {
          return  res.status(400).json({
                error: "Danh mục không tồn tại bro !!!"
            })
        }
        res.json(category)
    })
}

// update category

export const update = (req, res) => {
    const category = req.category;
    category.name = req.body.name;
    category.save((err, data) => {
        if (err) {
         return   res.status(400).json({
                error: "Danh mục này không tồn tại bro !!!"
            })
        }
        res.json(data);
    })
}

// delete category

export const remove = (req, res) => {
    let category = req.category;
    category.remove((err, deleteCategory) => {
        if (err) {
            res.status(400).json({
                error: "Danh mục không tồn tại bro !!!"
            })
        }
        res.json({
            category: deleteCategory,
            message: "Xóa danh mục thành công òi !!!"
        })
    })
}



