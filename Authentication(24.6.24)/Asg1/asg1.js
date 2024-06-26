/*A website that has 2 endpoints -
1) POST /signin
    Body={
        username:string
        password:string
    }
    Return a json webtoken with username encrypted
2) GET /users
    Headers-Authentication header
    Return an array of all users if user is signed in(token is correct)
    Returns 403 status code if not

*/
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const jwtPassword = "12345";

const All_USERS = [
    {
        username: "ronaldo@gmail.com",
        password:"cr7",
        name: "Cristiano Ronaldo"
    },
    {
        username: "nikhil@gmail.com",
        password: "nikhil@17",
        name: "Nikhil Bhuyan"
    },
    {
        username: "nihar@gmail.com",
        password: "12345",
        name: "Nihar Ranjan Bhuyan"
    }
]

