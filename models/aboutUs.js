import mongoose, { Schema, ObjectId } from "mongoose";
const aboutUsSchema = new Schema({
    name: {
        type: String,
        minLength: 5,
     
    },
    img: {
        type: String,
    },
    description:{
        type: String,
    }
}, { timestamps: true });
export default mongoose.model('AboutUs', aboutUsSchema);