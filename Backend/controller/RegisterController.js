import { User } from "../model/UserModel.js";
import {Cart} from "../model/CartItemModel.js";

// to create a new user\
export const createUser = async (req,res)=>{
 const username = req.body.user;
 const useremail = req.body.email;
 const userpassword= req.body.password;
  try{
    const newUser = new User({user:username,email:useremail,password:userpassword});
    const doc = await newUser.save();
    
    res.json(doc);
 

}catch(e){
  console.log(e.message);
}

}

export const loginUser = async(req,res)=>{
const{username,password} = req.body;

  try{
    const check = await User.findOne({username});
    if(check&& password === check.password){
      console.log("login");

    }
    else{
      console.log("not login");
    }
  }catch(e){

    console.log(e);
  }
}

// //add items to usercart
export const cartitems  = async(req,res)=>{
    try{
      const userId  = req.params.UserId;
      const {item} = req.body;
    //find the user's cart and update of create if the cart is not found
    let usercart = await Cart.findOne({userId});
    if(!usercart){
        usercart = new Cart(
          {userId:userId,items:[]});
    }
    //add the item  to the  user's cart
    usercart.items.push(item);
  const itemss =  await usercart.save();

  
    res.json(itemss);
  

    }catch(err){
        console.log(err);
        res.status(500);
    }
}

// //get usercarts item
// export const getCartItem = async(req,res)=>{
//     try{
//         const userId = req.params.userId;
//         const userCart = await Cart.findOne({userId});
//         const CartItem =userCart ? userCart.items:[];
//         res.json(CartItem);

//     }catch(err){
//         console.log(err);
//     }
// }