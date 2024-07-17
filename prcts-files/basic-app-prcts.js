const helll = "hello world";
console.log(helll);

// const http= require('http')
// const server= http.createServer((req,res)=>{
//     res.end('Hello from server2 side')
// })
// server.listen(4449,'192.168.217.40',()=>{
//     console.log('server has been started Listening to port 4449')
// })
const express = require("express"); //npm i express
const cors = require("cors");
const app = new express();
app.use(cors());
app.get("/", (req, res) => {
  res.json({ hello: "hello" });
});

app.listen(4400, "127.0.0.1", () => {
  console.log("express running");
});
