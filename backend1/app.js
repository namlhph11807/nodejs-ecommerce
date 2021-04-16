import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import productRouter from './routes/product.js'
import categoryRouter from './routes/category.js'
import authRouter from './routes/auth.js'
import userRouter from './routes/user.js'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import expressValidator from 'express-validator';
import cors from 'cors';

const app = express();
app.use(bodyParser.json())
dotenv.config();

// Connection
app.use(cors({
    origin: "http://localhost:8080"
}))



mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log(`Database connected`)
});

mongoose.connection.on('Error', err => {
    console.log(`Data connect failed, ${err.messagee}`);
})

// middl

app.use(expressValidator());

// router

app.use(morgan('dev'));
app.use('/api', productRouter);
app.use('/api', categoryRouter);
app.use('/api', authRouter);
app.use('/api', userRouter)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is runing on port : ${port}`);
})