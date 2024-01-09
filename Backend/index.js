import express from 'express';
import axios from 'axios';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose, { modelNames, mongo } from 'mongoose';
import {createUser,cartitems,loginUser} from './controller/RegisterController.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Usercart");

//routing
app.post("/users",createUser);
app.post("/login",loginUser);
//app.get("/getcart/:userId",getCartItem);
app.post("/addcart/:UserId",cartitems);

app.listen(port,()=>{
    console.log(`listening on ${port}`);
})
