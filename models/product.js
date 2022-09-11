import mongoose, { Schema, ObjectId } from "mongoose";
const productSchema = new Schema({
    name: {
        type: String,
        required: true
     
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
    },
    size: {
        type: String,
    },
    desc : {
        type: String,
    },
    category: {
        type: ObjectId,
        ref: "Category"
    }
}, { timestamps: true });
export default mongoose.model('Product', productSchema);