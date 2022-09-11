import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

import productRoute from '../routes/product';
import categoryRoute from '../routes/category';
import authRoute from '../routes/auth';
import cartRouter from '../routes/cart';
import bannerRouter from '../routes/banner';
import galleryRouter from '../routes/gallery';
import tittleRouter from '../routes/tittle'
import storyRouter from '../routes/story'
import aboutUsRoute from '../routes/aboutUs'
const app = express();

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())

// route
app.use("/api",productRoute);
app.use("/api",categoryRoute);
app.use("/api",authRoute);
app.use("/api", cartRouter);
app.use("/api", bannerRouter);
app.use("/api", galleryRouter);
app.use("/api", tittleRouter);
app.use("/api", storyRouter);
app.use("/api",aboutUsRoute);



// connnect database
mongoose.connect('mongodb://127.0.0.1:27017/ASMnextJS')
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error));
    
// connection
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})