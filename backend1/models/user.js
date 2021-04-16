import mongoose from 'mongoose';
import crypto from 'crypto';
import {v1 as uuidv1} from 'uuid';


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxleghth: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: 32
    },
    hashed_password: {
        type: String,
        required: true
    },
    about: {
        type: String,
        trim: true
    },
    salt: {
        type: String
    },
    role: {
        type: Number,
        default: 0
    },
    history: {
        type: Array,
        default: []
    },
    // password: {

    // }
}, {timestamps: true})

userSchema.virtual('password')
    .set(function (password){
        // console.log(password);
        this.salt = uuidv1();
        this.hashed_password = this.encryPassword(password)
    })

userSchema.methods = {
    authenticate: function (plainText){
        return this.encryPassword(plainText) === this.hashed_password;
    },

    encryPassword: function (password){
        // console.log(password);
        if(!password) return '';
        try{
            return crypto // mã hóa
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex')
        } catch (error){
            return "";
        }
    }
}


const UserModel = mongoose.model('users',userSchema);
export default UserModel;