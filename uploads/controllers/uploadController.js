import File from "../../models/uploadModel.js";

export const createfileUpload = async (req, res) => {
    const { fileOriginName, fileSize, path, fileCreateAt, mimeType } = req.body;
    try {
        if (!fileOriginName || !fileSize || !path || !fileCreateAt || !mimeType) {
            return res.status(404).json({ message: "file not found" })
        }
        const file = await File.create();
        const limit = limit({ fileSize: 10000 })
        const extention = mimeType("png || mp4 || pdf||pgv")
        res.status(200).json({
            message: "file uploaded successfully",
            fileOriginName,
            fileSize: limit,
            path,
            fileCreateAt,
            mimeType: extention
        });
        const newFile = new file()
        await newFile.save();

    } catch (error) {
        res.status(500).json({ message: "uploading file failured" })
    }
}