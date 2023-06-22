const express = require("express");

const app = express();
const Approuting = require("./routes/approuting");

//how to attech the routing
//use==> middlewere, inject the functionality

app.use("/", Approuting);
// app.use("/admin", adminroutnig);
// app.use("/customer", customerrouting);

const port = 3070;
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});


