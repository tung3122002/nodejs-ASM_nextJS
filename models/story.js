import mongoose, { Schema, ObjectId } from "mongoose";
const StorySchema = new Schema({
    name: {
        type: String,
        minLength: 5,
      
    },
    desc: {
        type: String,
        minLength: 5,
        required: true,
        unique: true
    },
    
    img: {
        type: String,
    },
    times: {
        type: String,
    }
}, { timestamps: true });
export default mongoose.model('Story', StorySchema);