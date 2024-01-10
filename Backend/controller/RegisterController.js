import { User } from "../model/UserModel.js";
import {Cart} from "../model/CartItemModel.js";
import jwt from 'jsonwebtoken'
import  bcrypt from 'bcrypt';
const saltRounds =10;

// to create a new user\
export const createUser =  (req,res)=>{
 const username = req.body.user;
 const useremail = req.body.email;
 const userpassword= req.body.password;
  try{
    bcrypt.hash(userpassword, saltRounds, function(err, hash) {
      // Store hash in your password DB.
      
    const newUser = new User({user:username,email:useremail,password:hash});
    const doc =  newUser.save();
    
    res.json(doc);
  });

 

}catch(e){
  console.log(e.message);
}

}

export const loginUser = async(req,res)=>{
  const user = req.body.user;
  const password = req.body.password;

  try{



    const check = await User.findOne({user});
    bcrypt.compare(password, check.password, function(err, result) {
     if(result==true){
      const token = jwt.sign({user},'secretkey');
      res.json(token);
   
     }    
     else{
      res.json({success: false});
     }
  });
    // if(check&& check.password === password){
    //   res.json({success:true})
     

    // }
    // else{
      
    //   res.json({success:false})
    // }
  }catch(e){

    console.log('errrrorrr');
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