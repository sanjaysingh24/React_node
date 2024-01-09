import mongoose  from "mongoose";
const UserSchema = new mongoose.Schema({
    user:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }

},{timestamps:true});

export const User = mongoose.model('User',UserSchema);