import express from "express";
import { upload } from "../uploads/uploads.js";
import { createfileUpload } from "../controllers/uploadController.js";
const router = express.Router();

router.post("/fileUpload",upload.single("file"), createfileUpload );

export default router;