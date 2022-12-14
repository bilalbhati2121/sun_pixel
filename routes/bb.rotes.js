import { bhati, bilal, school, login, signup, getdatapass, upadeta, datea ,ResendOtp,Forgetpassword,verifyotp,resetpassword} from "../controller/test.controller.js"
import { authentication } from "../middleware/authentication.js"
import Express from "express"

export const inesf = Express.Router()
inesf.route("/pixel").get(bhati)
inesf.route("/coching").put(bilal)
inesf.route("/dgfgf").put(school)
inesf.route("/user/login").post(login)
inesf.route("/user/singup").post(signup)
inesf.route("/getaai").get(authentication, getdatapass)
inesf.route("/user/updeta/:id").put(authentication, upadeta)
inesf.route("/user/Delete/:id").delete(authentication, datea)
inesf.route("/otp").post(ResendOtp)
inesf.route("/Forget/password").post(Forgetpassword)
inesf.route("/verify/otp").post(verifyotp)
inesf.route("/reset/password").post(resetpassword)
export default inesf;
