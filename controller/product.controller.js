import Product from "../models/product.models.js";

export const cerate = async (req, res) => {
  // console.log("adasda----2");
  // res.send("yes !")
  // try {
var imagesdata=[]
req.files.forEach((image,ok) => {
//   res.send(image)
// return;
  var imageType='';
  if (image.mimetype == "image/png") {
   imageType= "png" 
  } else if (image.mimetype=="image/jpg"||"image/jpeg") {
    imageType="jpg";
  }
  var imagerules={
      path:image.filename,
      fullpath:"http://localhost:3002"+image.path,
      type:imageType
  }
  imagesdata.push(imagerules)
});




req.body.images=imagesdata

    const productCreate = await Product.create(req.body);
    res.send(productCreate)
  // } catch (err) {
  //   res.send({
  //     status: false,
  //     msg: "something wrong with req.",
  //     data: err
  //     // console.log(err)
  //   })

  //   //console.log(err)
  // }
  // console.log(err)
}

