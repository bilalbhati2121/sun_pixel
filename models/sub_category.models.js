import mongoose from "mongoose";
export const sub_category = new mongoose.Schema({
    name: { type: String, required: true },
    cateId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'categories'
    },
    createdby: {
        type: mongoose.Schema.Types.ObjectId, ref: 'users'
    },
    status: {
        type: String, enum: ["active", "inactive"],
        default: "inactive"
    },

    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
})
export const subcategory = mongoose.model("sub_category", sub_category)
export default subcategory;
