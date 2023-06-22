

// extract routing express
const Approuting = require("express").Router();

Approuting.get("/", (request, response)=>{
    response.send("Welcome to live!");
});
// Approuting.post();
// Approuting.put();
// Approuting.delete();

//approuting
module.exports = Approuting;