import category from "../models/category.models.js"
export const categoryprodouct = async (req, res) => {
   try {
      const categoryvalue = await category.findOne({ name: req.body.name })
      if (categoryvalue) {
         res.send({
            status: true,
            mgs: "yeh sahi hai",
            data: categoryvalue
         })
         return;
      }
      var categorydata = await category.create(req.body)
      if (categorydata) {
         res.send({
            status: true,
            mgs: "yeh category sahi hai",
            data: categorydata
         })
      } else {
         res.send({
            status: false,
            mgs: "yeh category sahi nhi hai",
            data: {}
         })
      }
   } catch (err) {
      res.send({
         status: false,
         mgs: "yeh category sahi nhi hai",
         data: err
      })
   }
}
export const loingcategory = async (req, res) => {
   var datapass = await category.findOne({ status: "active" })
   if (datapass) {
      res.send({
         status: true,
         mgs: "yeh category sahi nhi hai",
         data: datapass
      })
   } else {
      res.send({
         status: false,
         mgs: "yeh category sahi nhi hai",
         data: {}
      })
   }
}
export const upadeta = async (req, res) => {
   var upadetapass = await category.findByIdAndUpdate({ _id: req.body._id }, req.body)
   // res.send("dfdg")
   if (upadetapass) {
      res.send({
         status: true,
         mgs: "yeh upadeta sahi nhi hai",
         data: upadetapass
      })
   } else {
      res.send({
         status: false,
         mgs: "yeh upadeta sahi nhi hai",
         data: {}
      })
   }
}
// export const deletee= async(req,res)=>{
//    const deleteekarene=await category.findByIdAndDelete({_id:req.body.id})
// res.send(deleteekarene)
// }