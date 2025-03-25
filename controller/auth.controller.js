// import  register from "../views/auth/"

import { comparePassword, createUser, getUserByEmail, hashPassword, loginUser, } from "../services/auth.services.js";



export const getRegisterPage = (req,res) =>{
   return res.render("../view/auth/register")
}

export const postRegister =async (req,res)=>{
    console.log(req.body);
    const { name,email,password} = req.body;
    console.log(name,email,password);

    const userExits =  await getUserByEmail(email);
    console.log(userExits);
    if(userExits) {
        console.log("User already exits",userExits)
        return res.redirect("/register");
    }
    const hashedPassword = await hashPassword(password);
    const user = await createUser({name,email,password : hashedPassword});
    console.log(user)
    res.redirect("/login");
    
    
}

export const getLoginPage = (req,res) =>{
    let isLoggedIn = req.cookies.isLoggedIn;
    console.log(isLoggedIn);
    return res.render("../view/auth/login",{isLoggedIn})
 
}



export const postLogin = async(req,res)=>{
    const {email, password } = req.body;

    const userExits =  await getUserByEmail(email);
    console.log(userExits);
    if(!userExits) {
        console.log("User not exits",userExits)
        return res.redirect("/login");
    }

    // const isPasswordValid = await comparePassword(password,userExits.password);
    // if(!isPasswordValid){
    //     return res.redirect("/login");
    // }

    const user =await loginUser(email,password);
    console.log("User Login successfully",user);

    // res.setHeader("Set-Cookie", "isLoggedIn=true; path=/;");
    res.cookie("isLoggedIn", true);
    res.redirect("/"); 
}