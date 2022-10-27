import { fatest, bhati, bilal, apple } from "../controller/test.controller.js"
import Express from "express"

export const router = Express.Router()
router.route("/fsgfht").get(fatest)
router.route("/pixel").post(bhati)
router.route("/test/create").put(bilal)
router.route("/reeyfey").put(apple)
//router.route("/owais").put(bilal)
export default router;