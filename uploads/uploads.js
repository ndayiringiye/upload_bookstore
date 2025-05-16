import path from "path";
import File from "../models/uploadModel.js";
import multer from "multer";
import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb("uploads");
    },
    filename: (req, file, cb) =>{
        const ext = path.extname(file.originalname);
        const basename = path.basename(file.originalname, ext);
        cb(null , `${basename}-${Date.now()}${ext}`)
    }
});
export const upload = multer({storage})