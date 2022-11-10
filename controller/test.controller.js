import jwt from "jsonwebtoken"
import fs from "fs"
import bcrypt from "bcrypt"
import User from "../models/user.models.js"
export const signup = async (req, res) => {
    // res.send("yes !")
    try {
        const pass = await User.findOne({ email: req.body.email })
        const mobilecheckout = await User.findOne({ mobile: req.body.mobile })
        if (pass) {
            res.send({
                status: true,
                mgs: "Email already exist.",
                data: {}
            });
        } else if (mobilecheckout) {
            res.send({
                status: false,
                mgs: "mobile already exist.",
                data: {}
            });
        }
        else {
            const salt = await bcrypt.genSalt(10);
            var passowrdpass = await bcrypt.hash(req.body.password, 10)
            //  salt=req.body.passowrd
            //  res.send(salt)
            req.body.password = passowrdpass

            var user = await User.create(req.body)
            if (user) {
                user.token = await jwt.sign({ time: Date(), userId: user._id }, "ck")

            }
            res.send({
                status: false,
                mgs: ("fasht time age."),
                data: user
            });
        }


    } catch (err) {
        res.send({
            status: false,
            msg: "Something wrong with request.",
            data: err
        })
    }
}

//     try{
//         const classs=await User.findOne({email:req.body.email})
//         const mobile=await User.findOne({mobile:req.body.mobile})
//         if (classs) {
// res.send({try{
//     status:false,
//     mgs:("Email already exist."),
//     data:{}
// });
// // return;
//         }else if (mobile) {
//             res.send({
//                 status:false,
//                 mgs:"mobile already exist.",
//                 data:{}
//             })
//             // return;
//         }

//         else{
//             //const salt=await bcrypt.genSalt(10);
//          var passowrdHash=await bcrypt.hash(req.body.password,11);
//         //     salt=req.body.password
//           //es.send(salti)
//           req.body.password=passowrdHash

//             //res.send(salti)
//             // console.log("salt",salt)

//             // return
//             var user= await User.create(req.body)
//            //console.log("salt",school)
//           if (user) {
//             user.token= await jwt.sign({ time:Date(), userId:user._id},"coching")
//            // console.log("data pass",user.token)
//             res.send({
//                 status:true,
//                 mgs:"singnup successfuly.",
//                 data:user

//             })

// return;
// console.log("data",user)
//  res.send(user)

//var token= await jwt.sign({ time:Date(), userid:_id},"coching")
// school.token=token
// res.send(data)   
//     }
//    //- return;
// }
// // return;

// catch(err){
//     res.send({
//         status:true,
//         mgs:"yeh sahi nhi hai.",
//         data:err
//     })

//}
// const school= await data.create(req.body)
// res.send(school)

//     const salt=await bcrypt.genSalt(10);

//     var token=jwt.sign({ time:Date(), userid:454},"coching")

//     const bilal=jwt.verify(token,"coching")


// // export const datapass=(req,res)=>{
//     // const salt=await bcrypt.genSalt(10);
//     //pass. passowrd=await bcrypt.hash("khan2324",salt);

//     var data=[]
//     var pass= req.body
//    pass.token=token
//    pass. password=await bcrypt.hash("er123",salt);
//    const bhati=await bcrypt.compare("er123","$2b$10$jVT/6YV4.rJXRlyAhyg7UOa/aasmYIcdBB44IqP2l2u42o.weYQ4C")
//    if (bhati) {
//     res.send("ye password shai tu send ho ")
//    }else{
//     res.send("ye password shai nhi hu to ruga ho je")
//    }
//     res.send(pass)
// data.push(pass)
// //pass. passowrd=await bcrypt.hash("khan2324",salt);
// //res.send(pass)

//     var  convertedToString=JSON.stringify(data)
// fs.writeFile("pixel.json",convertedToString,(ck)=>{



// })


//}


export const bhati = (req, res) => {
    fs.readFile("royal.js", (roee, data) => {
        if (roee) {
            var school = {
                "status": false,
                "msg": "Something wrong with request.",
                "data": roee,
            }
        } else {
            var school = {
                "status": true,
                "msg": "File read successfully.",
                "data": JSON.parse(data),

            }
        }
        res.send(school)
    })
    console.log("data pass")
}
export const bilal = (req, res) => {
    fs.writeFile("usre.json", " school ke dssata", (error) => {
        // console.log("data nhi aae hai",error)
        if (error == null) {
            var data = {
                "status": true,
                "msg": "File created successfully.",
                "data": [],
            }
        } else {
            var data = {
                "status": false,
                "msg": "Something wrong with request.",
                "data": error,
            }

        }

        res.send(data)
    })

    console.log("Controller is working");
}
export const apple = (req, res) => {
    res.send({
        "name": "sccdgudg",
        "city": "merta"
    })
}

export const school = async (req, res) => {
    const salt = await bcrypt.genSalt(11);
    var data = {
        time: Date(),
        userId: 11
    }
    const token = jwt.sign(data, "rttrerer")
    //const ndime = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiU3VuIFNlcCAyNSAyMDIyIDE2OjM4OjE0IEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKSIsImlkIjozNTc2NSwiaWF0IjoxNjY0MTA0MDk0fQ.nWbXpA3fV1eZCxkBzVYAg0IFGLlyRorNuf1iS6iLGpg","rttrerer")
    // newUser.password = await bcrypt.hash("khan2324", salt);
    var data = [];
    var newuser = req.body;
    newuser.token = token
    const validPassword = await bcrypt.compare("hh1234", "$2b$11$XJ5Cuvmi4Yr4szKZzZN3v.UxJgbASqyk46oI9UkLUql39TpvN7LEW");
    if (validPassword) {
        res.send("Your passowrd is correct.");
    } else {
        res.send("Your passowrd is incorrect.");
    }
    newuser.password = await bcrypt.hash("hh1234", salt);
    console.log("password chaje----", newuser.password)
    res.send(newuser)
    data.push(newuser)
    var convertedToString = JSON.stringify(data)
    fs.writeFile("royal.josn", convertedToString, (err) => {



    })
    res.send({
        "token": token,
        "ndime": ndime
    })
}
// export const lonig=(req,res)=>{
// fs.readFile("royal.json",async(ree,data)=>{

//     var nwedata=req.body
//     var newuser=JSON.parse(data)
//     data.email="bilal123.com"
// if (nwedata.email==newuser.email) {
//  var data={
//     status:true,
//     mgs:"ye api shai hai tu ",
//     data:[]
//  }
// }  else{
//     var data={
//         status:true,
//         mgs:"ye api shai hai tu ",
//         data:ree
//     }

// }
// res.send(data)
// const Password = await bcrypt.compare(nwedata.password,"$2b$10$l4NK9FJmZaqtuLSV6j/vUeX8khLEQ35UvQSNu24JBxtZjWnHgIrTu")
// if(Password){
//     res.send("Your passowrd is correct.");
//   }else{
//   res.send("Your passowrd is incorrect.");
//  }
// })
// // res.send(data)
// // }



export const login = async (req, res) => {

    // res.send('gfgfg')
    var bilal = await User.findOne({email:req.body.email});
    res.send(bilal)
    if (bilal) {
        var chechpassword = await bcrypt.compare(req.body.password, bilal.password)
        // res.send(chechpassword)
        if (chechpassword) {
            bilal.token = await jwt.sign({ time: Date(), userId: bilal._id }, "coching")

            //res.send(token)
            res.send({
                status: true,
                mgs: "login api is correct",
                data: bilal
            })
        } else {
            res.send({
                status: false,
                mgs: "login api is not correct",
                data: {}
            })
        }
    }
}
    
    // fs. readFile("royal.josn",async(err,data)=>{
    //   var oldData = JSON.parse(data)
    //     var nweData=req.body;
    //     //console.log(nweData)


    //     console.log(oldData)
    //     if (nweData.email == oldData.email) {

    //         //console.log("email pass kare",email )
    //        oldData.token = jwt.sign({time:Date(),userId:11},"rttrerer")
    //      var validPassword= await bcrypt.compare(oldData.password,nweData.$2b$11$XJ5Cuvmi4Yr4szKZzZN3v.UxJgbASqyk46oI9UkLUql39TpvN7LEW)
    //     //  console.log(validPassword)
    //     //b.token = jwt.sign({time:Date(),userId:11},"rttrerer")
    //     if (validPassword) {



    //         //   b.token = jwt.sign({time:Date(),userId:11},"rttrerer")
    //         res.send({
    //             status:true,
    //             msg:"right",
    //             data:oldData    

    //         })




    //     }else{
    //         res.send({
    //             status:false,
    //             msg:"wrong",
    //             data:{}
    //         })
    //     }

    //     } else{
    //     res.send({
    //         status:false,
    //         msg:"Email does not exist",
    //         data:{email:nweData.email}
    //     })

    //     }
    // res.send([oldData.email,nweData.email])

    // })






// export const login = (req,res) =>{
//     fs.readFile("royal.json",async(err,data) =>{
//        var dbData = JSON.parse(data);
//        var reqData = req.body;
//        if(reqData.email == dbData.email){
//           var isValid = await bcrypt.compare(reqData.password,dbData.$2b$10$l4NK9FJmZaqtuLSV6j/vUeX8khLEQ35UvQSNu24JBxtZjWnHgIrTu)  
//           if(isValid){
//              dbData.token = jwt.sign({time:Date(),userId:11},"rttrerer")
//              res.send({
//                 stauts:true,
//                 msg:"Login Successfully.",
//                 data:dbData
//              })
//           }else{
//              res.send({
//                 status:false,
//                 msg:"Invalid password given.",
//                 data:{}
//              })
//           }
//        }else{
//           res.send({
//              status:false,
//              msg:"Email does not exist.",
//              data:{email:reqData.email}
//           });
//        }
//        res.send([reqData.email,dbData.email])
//     })
//  }

// export const login =(req,res)=>{
//     fs.readFile("royal.json",async(ree,data)=>{
//         var oldData=JSON.parse(data)

//         var nweData = req.body
//         console.log(oldData )
//         console.log(nweData)
//         if (nweData.email==oldData.email) {
//          console.log("email shai ha ya nhi",nweData.email)   
//          console.log("email shai ha ya nhi",oldData.email)  
//          var chegahpassword= await bcrypt .compare(nweData.password,oldData.password)
//             if (chegahpassword) {
//                 oldData.token = jwt.sign({time:Date(),userId:11},"rttrerer")
//                 res.send({
//                                     stauts:true,
//                                     msg:"Login Successfully.",
//                                     data:oldData
//                                  })
//             } else{
//                              res.send({
//                                 status:false,
//                                 msg:"Invalid password given.",
//                                 data:{}
//         })
//         }

//         }else{
//             res.send({
//                              status:false,
//                              msg:"Email does not exist.",
//                              data:{email:nweData.email}
//                           });

//         }
//         res.send([nweData.email,oldData.email])
//     })
// }
// sab see pahle export cerate karena  
//use ka bate token ka pass karena or  password or token ka comper karen 
//ek feli banena use ka aana tere req,body data push karena or token pass karena 
//readfeli me  email ko pass kare ne or use ka aane tere password ka  gala kare    tega ne shai hai ya nhi ha     


export const getdatapass = async (req, res) => {
    var whrer = {}
    if (req.query.email) {
        whrer.email = req.query.email


    }
    if (req.query.username) {
        whrer.username = req.query.username
    }
    //whrer.email="bilalbhati@212.com"
    const data = await User.find(whrer)

    if (data.length > 0) {
        res.send({
            status: true,
            mgs: "user data sahi hai",
            data: data
        })

    } else {
        res.send({
            status: false,
            mgs: "user data sahi nhi hai",
            data: []
        })

    }
    res.send(data)
}

export const upadeta = async (req, res) => {
    //res.send("connected")
    try {
        const datapass = await User.findByIdAndUpdate({ _id: req.params.id }, req.body)
        if (datapass) {
            res.send({
                status: true,
                mgs: "Upadate api is correct",
                data: datapass
            })

        } else {
            res.send({
                status: false,
                mgs: "Update api is not correct ",
                data: {}
            })
        }
    } catch (err) {
        res.send({
            status: false,
            mgs: "Update api is not crrect",
            data: err
        })
    }
}

export const datea = async (req, res) => {
    //res.send("connected")
    try {
        const datapass = await User.findByIdAndDelete({ _id: req.params.id })
        if (datapass) {
            res.send({
                status: true,
                mgs: "Delete api is crrect",
                data: datapass
            })

        } else {
            res.send({
                status: false,
                mgs: "Delete api is not crrect",
                data: {}
            })
        }
    } catch (err) {
        res.send({
            status: false,
            mgs: "Delete api is not crrect",
            data: err
        })
    }
}


export const ResendOtp = async (req, res) => {
    var otp = 12345    
    req.body.otp=otp
    var data = await User.findByIdAndUpdate({_id:req.body.id},req.body)
    if(data){
       data.otp = otp
       res.send({
           status:true,
           msg:"right",
           data:data
       })
    }else{
       res.send({
           status:false,
           msg:"worng",
           data:data
       })

    }
       }