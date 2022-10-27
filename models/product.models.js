import mongoose from "mongoose";
const productschema = new mongoose.Schema({
    name: { type: String, requierd: true },
    price: { type: String, required: true },
    createdby: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    is_popular: { type: Boolean, default: 0 },
    description: { type: String, requierd: true },
    status: {
        type: String,
        enum: ["Active", "Deactive"],
        default: "Active"
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

})
const Product = mongoose.model("products", productschema)
export default Product;