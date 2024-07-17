const helll = "hello world";
console.log(helll);
const fs = require("fs"); //File system Module
const path = require("path");

const currentDir = __dirname;
// Go one folder back
const parentDir = path.resolve(currentDir, "..");

const ReadData = fs.readFileSync(`${parentDir}/README.md`, "utf-8");
console.log(ReadData);
const addData = `This is all we know about Node : ${ReadData}. \n Created on ${Date.now()}`;
fs.writeFileSync("./Output.txt", addData);

const http = require("http");
const productData = fs.readFileSync(
  `${parentDir}/dataAssests/Data.json`,
  "utf-8",
);

const server = http.createServer((req, res) => {
  // console.log(req.url)
  let pathname = req.url;
  if (pathname === "/" || pathname === "/overview") {
    console.log("overview api service");
    res.end("overview api service");
  } else if (pathname === "/product") {
    console.log("product api service");
    res.end("product api service");
  } else if (pathname === "/api") {
    // fs.readFile(`${parentDir}/dataAssests/Data.json`,'utf-8',(err,data)=>{
    //     if (err) {
    //         // Handle error
    //         console.error('Error reading file:', err);
    //         res.writeHead(500, { 'Content-Type': 'application/json' });
    //         res.end(JSON.stringify({ error: 'Internal Server Error' }));
    //         return;
    //     }
    //     try {
    //         const productData = JSON.parse(data); // Parse JSON data

    //         res.writeHead(200, {
    //             'Content-Type': 'application/json',
    //             'my-header': 'Hellowwwww'
    //         });

    //         console.log(productData); // Check if productData is correctly parsed

    //         // Send productData as JSON string
    //         res.end(JSON.stringify(productData));
    //     } catch (error) {
    //         // Handle JSON parsing error
    //         console.error('Error parsing JSON:', error);
    //         res.writeHead(500, { 'Content-Type': 'application/json' });
    //         res.end(JSON.stringify({ error: 'Error parsing JSON' }));
    //     }
    // })

    console.log(productData);
    res.writeHead(200, {
      "Content-type": "application/json",
      "my-header": "Hellowwwww",
    });
    res.end(productData);
  } else {
    //We can write head before sending response res.end
    //we can send header object and parameter to send
    res.writeHead(404, {
      "Content-type": "application/json",
      "my-own-header": "Hellow",
    });
    res.end("Page Not Found");
  }
  // res.end(`Hello from server side,  evrytime new url is hit we will be able to log that url in server listen ${req.url}`)
});
server.listen(4448, "127.0.0.1", () => {
  // 127.0.0.1 is a special-purpose IPv4 address commonly known as the loopback address
  // It is used to test network software or network configurations on a local machine
  //  without having to connect to an external network or the internet
  // 127.0.0.1 is a reserved IP address that allows a computer to communicate with itself,
  // facilitating local testing and debugging of network-related software and services.
  console.log(
    "we pass the port number here which will recognise our server in the local and 127.0.0.1 is ",
  );
  console.log("server has been started Listening to port 4448");
});
