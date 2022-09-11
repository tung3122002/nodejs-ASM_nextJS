import mongoose, { Schema, ObjectId } from "mongoose";
const tittleSchema = new Schema({
    name: {
        type: String,
        minLength: 5,
        required: true,
        unique: true
    },
    img: {
        type: String,
    }
}, { timestamps: true });
export default mongoose.model('Tittle', tittleSchema);