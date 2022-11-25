import category from "../models/category.models.js"
export const categoryprodouct = async (req, res) => {
   try {
      const categoryvalue = await category.findOne({ name: req.body.name })
      if (categoryvalue) {
         res.send({
            status: false,
            mgs: "Category already exist",
            data: {}
         })
         return;
      }
      var categorydata = await category.create(req.body)
     res.send(categorydata) 
     
   } catch (err) {
      res.send({
         status: false,
         mgs: "SOmething wrong with request.",
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
export const deletee= async(req,res)=>{
   // console.log("fddf")
   const deleteekarene=await category.findByIdAndDelete({_id:req.body.id})
   // console.log(deleteekarene)
if (deleteekarene) {
   res.send({
      status:true,
      mgs:"yeh delete hai",
      data:{}
   })
}else{
   res.send({
      status:true,
      mgs:"yeh delete hai",
      data:{}
   })
}

}
export const GetAll=async(req,res)=>{
   const alldata=await category.find({status:"active"})
if (alldata) {
   res.send({
      status:true,
      mgs:"Data fetch successsfiully.",
      data:alldata
   })
}else{
   res.send({
      status: false,
      msg: "Categories not found.",
      data: []
   })
}
}