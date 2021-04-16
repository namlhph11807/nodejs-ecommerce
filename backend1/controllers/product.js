import Product from '../models/product';
// import formidable from 'formidable';
// // import fs from 'fs';
// import _ from 'lodash'

export const create = (req, res) => {
    const product = new Product(req.body);
    product.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Không tìm thấy product bro :( !!!"
            })
        }
        res.json(data)
    })

}

export const productById = (req, res, next, id) => {
    Product.findById(id).exec((err, product) => {
        if (err || !product) {
            res.status(400).json({
                error: "Không tìm thấy sản phẩm"
            })
        }
        req.product = product;
        next();
    })

}

export const read = (req, res) => {
    return res.json(req.product)
}

export const remove = (req, res) => {
    let product = req.product;
    product.remove((err, deleteProduct) => {
        if (err) {
            return res.status(400).json({
                error: "Không xóa được sản phẩm"
            })
        }
        res.json({
            deleteProduct,
            message: "xóa thành công"
        })
    })
}

export const update = (req, res) => {
    const product = req.product;
    product.name = req.body.name;
    product.save((err, data) => {
        if (err) {
         return   res.status(400).json({
                error: "San pham này không tồn tại bro !!!"
            })
        }
        res.json(data);
    })
}


export const list = (req, res) => {
    Product.find((err, data) => {
        if (err) {
           return res.status(400).json({
                error: "Không tìm thấy sản phẩm"
            })
        }
        res.json({message : 'Lấy sản phẩm thành công',data});
    })
}
export const photo = (req, res, next) => {
    if (req.product.photo.data) {
        res.set("Content-Type", req.product.photo.contentType);
        return res.send(req.product.photo.data);
    }
    next();
}