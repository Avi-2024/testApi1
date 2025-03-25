// import {connection} from "../config/db.js"
// import argon2 from "argon2";
// export const getUserByEmail = async(email) =>{
//     const [user] = await connection.execute('SELECT * FROM users WHERE email = ?',[email])
//     console.log("from service.js page getUserByEmail",user);
//     return user;
// }

// export const createUser = async({name,email,password})=>{
//     const [user] = await connection.execute('INSERT INTO users (name,email,password) VALUES (?,?,?)',[name,email,password]);
//     return user;
   
// }

// export const hashPassword = async(password)=>{
//     return await argon2.hash(password);
// }

// export const comparePassword = async(password,hashPass)=>{
//     return await argon2.verify(hashPass,password);
// }

// export const loginUser = async(email,password)=>{
//     const hashPassword = await argon2.hash(password);
//     const [user] = await connection.execute('SELECT * FROM users WHERE email = ? AND password = ?', [email, hashPassword]);
//     return user;
// }



import argon2 from "argon2";
import User from "../model/user.js";

export const getUserByEmail = async (email)=>{
    const user = await User.findOne({email});
    return user;
}

export const createUser = async({name,email,password})=>{
    const user = await User.create({name,email,password});
    await user.save();
    return user;
}

export const hashPassword = async(password)=>{
    return await argon2.hash(password);
}

export const comparePassword = async(password,hashPass)=>{
    return await argon2.verify(hashPass,password);
}

export const loginUser = async(email,password)=>{
    const user = await User.findOne({email});
    if(!user) return null;
    const isValidPassword = await argon2.verify(user.password,password);
    if(!isValidPassword) return null;
    return user;
}

