const path = require("path");
const fs = require("fs");
const superagent = require("superagent");

const currentDir = __dirname;
const parentDir = path.resolve(currentDir, "..");

readfilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("Could not read File");
      resolve(data);
    });
  });
};

writefilePro = (file, message) => {
  console.log("file", file);
  console.log("message", message);
  return new Promise((resolve, reject) => {
    fs.writeFile(file, message, (err) => {
      if (err) reject("Could not write file");
      resolve("Random Image saved to file");
    });
  });
};

/**
 *
 */
readfilePro(`${parentDir}/dataAssests/dog-breed.txt`)
  .then((data) => {
    console.log(`Breed ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`); /// If this give rejected promise it will go to next catch which is line 35
  })
  .catch((err) => {
    // If we do not addReject here it will take dfualt resolve promise and move to next then
    console.log("inside first catch");
    return new Promise((res, rej) => {
      // throwing catch will go to next catch with rej() we passed in the above example
      rej(err);
    });
  })
  .then((res) => {
    // chained the result of previous handler
    console.log(res.body, "inside second then");
    if (res?.body?.status == "success") {
      // console.log(res.body)
      return writefilePro(
        `${parentDir}/dataAssests/Dog-img.txt`,
        res?.body?.message,
      );
    } else {
      console.log("else");
      return new Promise((resolve, rej) => {
        rej(res.message);
      });
    }
  })
  .catch((err) => {
    console.log(
      "'inside second catch'------------------------------------------------------",
    );

    console.log("error in api response");
    return new Promise((resolve, rej) => {
      rej(err);
    });
  })
  .then((res) => {
    console.log(res, "inside third then res");
  })
  .catch((err) => {
    console.log("error catch final");
    console.log(err);
  });
