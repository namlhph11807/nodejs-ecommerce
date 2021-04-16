import User from '../models/user';
import jwt from 'jsonwebtoken';
// tạo ra token
import expressJwt from 'express-jwt';
// cho auther kiểm tra 
// import {errorHandler} from '../helpers/db'

export const signup = (req, res) => {
    // console.log("request body", req.body);
    const user = new User(req.body);
    user.save((error, user) => {
        if(error){
            console.log(error.message);
            return res.status(400).json({
                error: "Không thể đăng ký tài khoản"
            })
        }
        // user.salt = undefined
        // user.hashed_password = undefined
        res.json({ user })
    })
}

export const signin = (req, res) => {
    const {email, password} = req.body;
    User.findOne({email}, (error, user) => {
        if( error || !user){
            return res.status(400).json({
                error: 'Email không tồn tại. Vui lòng thử lại'
            })
        }
        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: 'Email hoặc password không đúng. Vui lòng thử lại'
            })
        }
        
        // generate a signed token with user id and secret
        const token = jwt.sign({ _id: user._id }, "vincenzo");
        // persist the token as 't' in cookie with  
        res.cookie('t', token, { expire: new Date() + 9999 });
        // return response with user and token to frontend client
        const { _id, name, email, role } = user;
        return res.json(
            {
                token, user: { _id, email, name, role }
            }
        )
    })
};

    export const signout = (req, res) =>{
        res.clearCookie('t');
        res.json({
            message: 'Đăng xuất thành công'
        })
}
    export const requireSignin = expressJwt({
        secret :"vincenzo",
        algorithms : ["HS256"],
        userProperty: "auth",
    });

    export const isAuth = (req, res, next) => {
        let user = req.profile && req.auth && req.profile._id == req.auth._id;
        if (!user) {
            return res.status(403).json({
                error: "Không thể đăng nhập"
            })
        }
        next();
    }
    
    export const isAdmin = (req, res, next) => {
        if (req.profile.role == 0) {
            return res.status(403).json({
                error: "Không phải admin !!!"
            })
        }
        next();
    }
