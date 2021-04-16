import mongoose, { Schema } from 'mongoose';
import Category from './category';
const { ObjectId } = Schema.Types;

const productSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxLength: 32,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 2000
    },
    price: {
        type: Number
    },
    shipping: {
        required: true,
        type: Boolean
    },
    sold: {
        type: Number,
        default: 0
    },
    category: {
        type: ObjectId,
        ref: Category,
        required: true
    },
    quantity: {
        type: Number,
    },
    image: {
       type:String
    }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema)