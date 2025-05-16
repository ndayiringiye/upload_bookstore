import mongoose from "mongoose";

const FileSchema = mongoose.Schema({
    fileOriginName:{
        type: String,
        required: true,
        unique :true
    },
    mimeType:{
        type: String,
        required: true,
        unique :true
    },
    fileSize:{
        type: Number,
        required: true,
        unique :true
    },
    path:{
        type: String,
        required: true,
        unique :true
    },
    fileCreateAt:{
        type : new Date()
    }
});
const File = mongoose.model("File", FileSchema);
export default File;