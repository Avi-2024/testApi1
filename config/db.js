// import mysql from 'mysql2/promise';
// import { createUsersTable } from '../model/user.js';

// // Create a connection to the database
// export const connection = await mysql.createConnection({
//     host: 'localhost', 
//     user: 'root',     
//     password: 'Avi@2023', 
//     database: 'user' 
// });

// async function createTable() {
//     try {
//         await connection.execute(createUsersTable);
//         console.log("User tabel created Successfully")
//     } catch (error) {
//         console.error(error)
//     }
// }

// createTable();


import mongoose from 'mongoose';

export const connectDB = async () => {
        await mongoose.connect('mongodb://localhost:27017/authentication', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
};

