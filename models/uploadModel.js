import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
  fileOriginName: {
    type: String,
    required: true,
  },
  mimeType: {
    type: String,
    required: true,
  },
  fileSize: {
    type: Number,
    required: true,
  },
  path: {
    type: String,
    required: true,
    unique: true,
  },
  fileCreateAt: {
    type: Date,
    default: Date.now,
  },
});

const File = mongoose.model("File", FileSchema);
export default File;
