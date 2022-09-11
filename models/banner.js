import mongoose, { Schema, ObjectId } from "mongoose";
const bannerSchema = new Schema({
    name: {
        type: String,
        minLength: 5,
     
    },
    img: {
        type: String,
    }
}, { timestamps: true });
export default mongoose.model('Banner', bannerSchema);