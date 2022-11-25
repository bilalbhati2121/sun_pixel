import { categoryprodouct, loingcategory, upadeta ,deletee, GetAll} from "../controller/category.controller.js"
import Express from "express";
export const bhati = Express.Router()
bhati.route("/category/create").post(categoryprodouct)
bhati.route("/datapass").post(loingcategory)
bhati.route("/upadetaaapi").post(upadeta)
bhati.route("/Delete").delete(deletee)
bhati.route("/category/list-test").post(GetAll)
export default bhati;