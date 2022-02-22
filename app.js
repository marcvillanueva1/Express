const express = require ("express");
const path = require("path");
const router = require("./routes/mainRoutes");

const app = express();


app.use(express.static(path.join(__dirname, "/public")));

app.listen("3000", ()=>{
    console.log("Servidor escuchando")
})

app.use(router);