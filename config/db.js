import mongoose from "mongoose";
export const bilal =async()=>{
    const conn =await mongoose.connect(
    "mongodb://localhost:27017/qnr" 

    )  
    console.log("Host----",conn.connection.host)
}

export default bilal;









// const connectDB = async () => {
//    const conn = await mongoose.connect(
//     "mongodb://localhost:27017/qnr",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   );
//   console.log("Host----", conn.connection.host);
// }


// export default connectDB;
