const fs = require("fs");
const path = require("path");

const currentDir = __dirname;
const parentDir = path.resolve(currentDir, "..");
// returns a promise

let countValue = (t) =>
  new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(t);
    }, t);
  });

async function fun1(t) {
  const val1 = await countValue(t);

  console.log(val1, "done with val1");
  const val2 = await countValue(val1 * 2);
  console.log(val2, "done with val2");
  console.log("done");
}
console.log("start");
fun1(1000);
console.log("mid");

/// fs.readfile  function is async hence getting data should
// use promise which will give us resolve / reject final data
readfilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) reject("Could not read File");
      resolve(data);
    });
  });
};

///Async function always return promises,if sending string it will wrap into promise- *** need to use try catch if async has return
async function readFileWitoutpromise(file) {
  try {
    res = await require("fs/promises").readFile(file, "utf-8");
    console.log("15", res);
    return res;
  } catch (err) {
    throw err;
  }
}

// readfilePro(`${parentDir}/dataAssests/dog-breed.txt`).then((res) =>
//   console.log("readfile with promise return ", res),
// );
// readFileWitoutpromise(`${parentDir}/dataAssests/dog-breed.txt`).then((res) =>
//   console.log("function with use of async and await for readFile ", res),
// );

//////
// readfilePro && readFileWitoutpromise are same functioning
/// using async and await reduced the code lines

//return promise an arraow fn which has argument passed
//function is used async await because promiseprototype is returned,
//if we not wait for settlement it will return pemding promise no vaild data
let promiseprototype = async (data) => {
  const res = await new Promise((res, rej) => {
    if (data && data.length > 0) {
      res("resolving promise it has data");
    } else {
      rej("No Category Found");
    }
  });
  return res;
};

/**
 * If we adding setTimeout and callback function Async
 * we expect that it will wait for min given time  then give reolved promise
 * but.... remeber async function is promise hence it will go into microtask queue
 * and setTimeout goes into webAPI
 * microtask will prefer hence apifetch will return and goes to callback queue settimeout executes later
 * hence in return case not recomended use of setTimeout
 * check countValue and fun1
 */
async function apifetch(data) {
  // setTimeout(async()=>{
  // console.log('inside second setTimeout callback')
  /// we have to await for promise settlement else res will go with pending status
  try {
    const res = await promiseprototype(data);
    console.log("apifetch", res);
    return res;
  } catch (err) {
    console.log("err", err);
    throw err; // this will throw rejected promise  in return of apifetch  if await returns rejected promise
  }
  // },1000)
}

(async () => {
  const res = await apifetch("data"); //async directly gives data no need to do resolve
  console.log("with await  IIFE", res);
})(); //IIFE - immediately invoked function expression

apifetch("")
  .then((res) => {
    console.log("with then", res);
  })
  .catch((err) => console.log("ERR", err));

async function functionCall() {
  console.log("before async");
  try {
    // If something  returns promise , using await will give data of settled promise but for using await we have to make parent function async
    filedata = await readFileWitoutpromise(
      `${parentDir}/dataAssests/dog-breed.txt1`,
    );
    console.log("from functionCall -readFileWitoutpromise", filedata);
    dataFetch = await apifetch(filedata);
    // dataFetch = await apifetch(""); this output rejected promise which get catched into catch
    console.log("from functionCall -apifetch", dataFetch);
  } catch (err) {
    //if any  await function gives rejected promise the next lines not execute and we come out of try and recieve d=err in catch
    console.log("inside catch", err);
    /// since we dont need to return anyhting , we dont need to use throw here
  }
}
// console.log("before async line");
functionCall(); // async fn runs in background next lines get executed
// console.log("after async function caLL");
