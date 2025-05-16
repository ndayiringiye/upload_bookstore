import File from "../models/uploadModel.js";

export const createfileUpload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const { originalname, mimetype, size, path } = req.file;

    const newFile = await File.create({
      fileOriginName: originalname,
      mimeType: mimetype,
      fileSize: size,
      path: path,
    });

    res.status(201).json({
      message: "File uploaded successfully",
      file: newFile,
    });
  } catch (error) {
    console.error("Upload error:", error.message);
    res.status(500).json({ message: "Uploading file failed", error: error.message });
  }
};
