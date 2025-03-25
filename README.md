# Authentication

This is an authentication project built with Node.js, Express, MongoDB, and EJS. It provides user registration and login functionality.

## Features

- User registration
- User login
- Password hashing with Argon2
- Session management with cookies
- MongoDB for data storage

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Avi-2024/authentication.git
   cd authentication
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the server:
   ```sh
   npm start
   ```

## Project Structure

```
.
├── app.js
├── config
│   └── db.js
├── controller
│   ├── auth.controller.js
│   └── home.controller.js
├── model
│   └── user.js
├── public
│   └── style.css
├── routers
│   └── router.js
├── services
│   └── auth.services.js
├── view
│   ├── auth
│   │   ├── login.ejs
│   │   └── register.ejs
│   ├── home.ejs
│   └── partials
│       ├── footer.ejs
│       └── header.ejs
└── package.json
```

## Usage

- Navigate to `http://localhost:3000/register` to register a new user.
- Navigate to `http://localhost:3000/login` to log in.

## License

This project is licensed under the ISC License.
