import { categoryprodouct, loingcategory, upadeta ,deletee} from "../controller/category.controller.js"
import Express from "express";
export const bhati = Express.Router()
bhati.route("/categorydata").get(categoryprodouct)
bhati.route("/datapass").post(loingcategory)
bhati.route("/upadetaaapi").post(upadeta)
bhati.route("/Delete/:id").delete(deletee)
export default bhati;