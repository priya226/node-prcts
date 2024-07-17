const EventEmitter = require("events");
const http = require("http");

// const myEmitter = new EventEmitter();
// myEmitter.on('newItem',()=>{
//     console.log('listen the event for new Item')
// })
// myEmitter.on('newItem',(stock)=>{
//     console.log(`${stock} newItem added into store`)
// })
// myEmitter.emit('newItem')
// myEmitter.emit('newItem',3)

// //Creating a sales class which extends from EventEmitter and contain all properties
// class Sales  extends EventEmitter{
//     constructor(){
//         super();
//     }
// }

// // we can create our event with sales object
// const myEmitter = new Sales();

// myEmitter.on('newItem',()=>{
//     console.log('listen the event for new Item in sales')
// })
// myEmitter.on('newItem',(stock)=>{
//     console.log(`${stock} newItem added into store in sales`)
// })
// myEmitter.emit('newItem')
// myEmitter.emit('newItem',3)

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("request received");
  res.end("Request Received");
});

server.on("request", (req, res) => {
  // res.end("another request response")
  console.log("another request");
});

server.on("close", () => {
  console.log("server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for Response .....");
});
