const fs = require("fs");
const path = require("path");
const server = require("http").createServer();
const currentDir = __dirname;
// Go one folder back
const parentDir = path.resolve(currentDir, "..");

server.on("request", (req, res) => {
  // //Solution 1
  // fs.readFile(`${parentDir}/dataAssests/readFile.txt`, (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });
  // // Solution 2
  // //readble is stream we will handle those stream of events by listening
  // const readble = fs.createReadStream(`${parentDir}/dataAssests/readFile.txt`);
  // readble.on("data", (chunk) => {
  //   res.write(chunk); //if  chunk of data coming then write
  // });
  // readble.on("end", () => {
  //   res.end("data stream cmpleted");
  // });
  // readble.on("error", (err) => {
  //   res.statusCode = 500;
  //   res.end("File not found");
  // });
  //Solution 3
  // const readble = fs.createReadStream(`${parentDir}/dataAssests/readFile.txt`);
  // readble.pipe(res);
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening ....");
});
