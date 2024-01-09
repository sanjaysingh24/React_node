import mongoose from "mongoose";
const CartSchema =new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    items:[{
        type:String
    }]
})
export const Cart = mongoose.model('Cart',CartSchema);