import { categoryprodouct, loingcategory, upadeta } from "../controller/category.controller.js"
import Express from "express";
export const bhati = Express.Router()
bhati.route("/categorydata").get(categoryprodouct)
bhati.route("/datapass").post(loingcategory)
bhati.route("/upadetaaapi").post(upadeta)
//bhati.route("/deleteeaapi").patch(deletee)
export default bhati;