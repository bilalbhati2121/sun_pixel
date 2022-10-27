import multer from "multer";
import path from "path";
const imageStorage = multer.diskStorage({
    destination: "product_upload",
    filename: (req, file, ck) => {
        ck(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
});
export const imageupload = multer({

    storage: imageStorage,
    limits: {

        fieldSize: 1000000 * 2 // 1000000 Bytes =1MB

    },
    fileFilter(req, file, ck) {
        
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            return ck(new Error("Please upload a Image' "))
        }
        ck(undefined, true)
    }
})
