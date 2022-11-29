import { cerate } from "../controller/product.controller.js"
import { imageupload } from "../services/image.services.js"
import Express from "express"
export const royal = Express.Router()
royal.route("/Product/ceratE").post(imageupload.array('product_image',3), cerate)
export default royal;