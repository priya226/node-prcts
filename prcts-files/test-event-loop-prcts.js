// process.env.UV_THREADPOOL_SIZE = 1 // Set UV_THREADPOOL_SIZE before any asynchronous operations

const fs = require("fs");

const crypto = require("crypto");

const startTime = Date.now();

// console.log(process.env.UV_THREADPOOL_SIZE)

setTimeout(() => {
  console.log("timer 1 finished");
}, 0);
setImmediate(() => {
  console.log("immediate 1 finished");
});

// fs.readFile("./Output.txt", () => {
//   console.log("I/O file read done");
//   console.log("============================");

//   setTimeout(() => {
//     console.log("timer 2 finished");
//   }, 0);
//   setTimeout(() => {
//     console.log("timer 3 finished");
//   }, 200);
//   setImmediate(() => {
//     console.log("immediate 2 finished");
//   });
//   // console.log('Here setTimout with 0 will expire but setImmediate execute first because polling phase ')
//   // console.log('polling phase { It will check for I/O events (like incoming requests or data) that are ready to be processed.}')
//   // console.log('So Polling phase afte setImmediate gets executed first')

//   console.log("==============================");
//   process.nextTick(() => console.log("Process.nextTick"));
//   // console.log(' nextTick is part of the microtasks queue, which get executed after each phase, so not just after one entire tick.')

//   console.log("=========");
//   // crypto.pbkdf2('password','salt',100000,1024,'sha512',()=>{
//   //     // "cypto function {to encryppt password} to use threads and to show how much it takes we stored statTime and then calculate interval here "
//   //     console.log(Date.now()-startTime,'password encrypted 1 thread')
//   // })
//   // crypto.pbkdf2('password','salt',100000,1024,'sha512',()=>{
//   //     console.log(Date.now()-startTime,'password encrypted 2 thread')
//   // })
//   // crypto.pbkdf2('password','salt',100000,1024,'sha512',()=>{
//   //     console.log(Date.now()-startTime,'password encrypted 3 thread')
//   // })

//   // crypto.pbkdf2('password','salt',100000,1024,'sha512',()=>{
//   //     console.log(Date.now()-startTime,'password encrypted 5 thread')
//   // })

//   crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
//   console.log(Date.now() - startTime, "password encrypted 1 thread");
//   crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
//   console.log(Date.now() - startTime, "password encrypted 2 thread");
//   crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
//   console.log(Date.now() - startTime, "password encrypted 3 thread");
// });

console.log("top level code ");

// import fs from "fs";
// setTimeout(()=>{console.log('1')}, 12);
// setImmediate(()=>{console.log('2')});

// let st = new Date().getTime();
// fs.readFile('./Response/Data.json', 'utf-8', (data, err)=>{
//     console.log(JSON.parse(data));
//     setTimeout(()=>{console.log('3')}, 0);
//     setImmediate(()=>{console.log('4')});
//       console.log('5');
//     // console.log('time laps',new Date().getTime() - st);

// })

// console.log('6');
