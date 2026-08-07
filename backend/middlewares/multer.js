import multer from "multer";
import fs from "fs";
import path from "path";

const uploadDir = path.join(process.cwd(), "public");

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("Multer middleware loaded");
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const filename = Date.now() + "-" + file.originalname;
        cb(null, filename);
    },
});

export const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
});